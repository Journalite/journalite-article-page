/**
 * Helper types for Next.js dynamic routes
 */

/**
 * Type for dynamic routes with a single parameter
 */
export type DynamicPageProps<T extends string> = {
    params: {
        [K in T]: string
    }
}

/**
 * Type for dynamic routes with search params
 */
export type DynamicPageWithSearchProps<T extends string> = DynamicPageProps<T> & {
    searchParams: Record<string, string | string[] | undefined>
} 