interface CacheItem<T> {
    data: T;
    timestamp: number;
    ttl: number;
}

class SimpleCache<T> {
    private cache = new Map<string, CacheItem<T>>();
    private maxSize: number;

    constructor(maxSize = 1000) {
        this.maxSize = maxSize;
    }

    set(key: string, data: T, ttlMinutes = 8): void {
        const ttl = ttlMinutes * 60 * 1000; // Convert minutes to milliseconds
        const item: CacheItem<T> = {
            data,
            timestamp: Date.now(),
            ttl
        };

        this.cache.set(key, item);

        // Clean up old entries if cache is getting too large
        if (this.cache.size > this.maxSize) {
            this.cleanup();
        }
    }

    get(key: string): T | null {
        const item = this.cache.get(key);

        if (!item) {
            return null;
        }

        // Check if item has expired
        if (Date.now() - item.timestamp > item.ttl) {
            this.cache.delete(key);
            return null;
        }

        return item.data;
    }

    has(key: string): boolean {
        return this.get(key) !== null;
    }

    delete(key: string): boolean {
        return this.cache.delete(key);
    }

    clear(): void {
        this.cache.clear();
    }

    size(): number {
        // Clean expired items first
        this.cleanup();
        return this.cache.size;
    }

    private cleanup(): void {
        const now = Date.now();
        const keysToDelete: string[] = [];

        for (const [key, item] of this.cache.entries()) {
            if (now - item.timestamp > item.ttl) {
                keysToDelete.push(key);
            }
        }

        keysToDelete.forEach(key => this.cache.delete(key));

        // If still too large, remove oldest entries
        if (this.cache.size > this.maxSize) {
            const entries = Array.from(this.cache.entries());
            entries.sort((a, b) => a[1].timestamp - b[1].timestamp);

            const entriesToRemove = entries.slice(0, entries.length - this.maxSize);
            entriesToRemove.forEach(([key]) => this.cache.delete(key));
        }
    }

    // Get cache statistics
    getStats() {
        this.cleanup();
        const now = Date.now();
        let expiredCount = 0;
        let activeCount = 0;

        for (const item of this.cache.values()) {
            if (now - item.timestamp > item.ttl) {
                expiredCount++;
            } else {
                activeCount++;
            }
        }

        return {
            totalSize: this.cache.size,
            activeItems: activeCount,
            expiredItems: expiredCount,
            maxSize: this.maxSize
        };
    }
}

// Create global cache instances
const guardianCache = new SimpleCache<any>(500); // Store up to 500 Guardian API responses
const apiCache = new SimpleCache<any>(1000); // General API cache

export { SimpleCache, guardianCache, apiCache };
export default SimpleCache; 