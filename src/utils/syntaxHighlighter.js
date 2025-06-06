import Prism from 'prismjs';

// Import language support
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-markdown';

/**
 * Apply syntax highlighting to all code blocks in a container
 * @param {HTMLElement} container - The container element to search for code blocks
 */
export function highlightCodeBlocks(container) {
    if (typeof window === 'undefined') return; // SSR guard

    const codeBlocks = container.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        const pre = codeBlock.parentElement;

        // Get language from class name or data attribute
        let language = 'javascript'; // default

        // Check for language-* class on the code element
        const classNames = codeBlock.className.split(' ');
        for (const className of classNames) {
            if (className.startsWith('language-')) {
                language = className.replace('language-', '');
                break;
            }
        }

        // Check for data-language on the pre element
        if (pre.hasAttribute('data-language')) {
            language = pre.getAttribute('data-language');
        }

        // Apply syntax highlighting if language is supported
        if (Prism.languages[language]) {
            try {
                const code = codeBlock.textContent || '';
                const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
                codeBlock.innerHTML = highlightedCode;

                // Add language indicator
                pre.setAttribute('data-language', language);
                pre.style.position = 'relative';

            } catch (error) {
                console.warn('Syntax highlighting failed for language:', language, error);
            }
        }
    });
}

/**
 * Auto-detect and highlight code blocks when the DOM is ready
 */
export function autoHighlightCodeBlocks() {
    if (typeof window === 'undefined') return; // SSR guard

    const highlightOnLoad = () => {
        const containers = [
            document.querySelector('.article-content'),
            document.querySelector('.paragraph-text'),
            document.querySelector('.paragraph-block'),
            document.body
        ].filter(Boolean);

        containers.forEach(container => {
            if (container) {
                highlightCodeBlocks(container);
            }
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', highlightOnLoad);
    } else {
        highlightOnLoad();
    }
}

/**
 * Highlight code blocks after dynamic content is loaded
 * Call this after AJAX content updates
 */
export function highlightDynamicContent() {
    if (typeof window === 'undefined') return; // SSR guard

    // Wait a bit for DOM to settle
    setTimeout(() => {
        autoHighlightCodeBlocks();
    }, 100);
} 