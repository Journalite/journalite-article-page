import { Plugin } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';
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

function createCodeBlockDecorations(doc, schema) {
    const decorations = [];

    doc.descendants((node, pos) => {
        if (node.type === schema.nodes.code_block) {
            const language = node.attrs.language || 'javascript';
            const text = node.textContent;

            if (text && Prism.languages[language]) {
                try {
                    // Use Prism to tokenize the code
                    const tokens = Prism.tokenize(text, Prism.languages[language]);

                    let from = pos + 1; // Start after the opening tag
                    let offset = 0;

                    function processTokens(tokens) {
                        tokens.forEach(token => {
                            if (typeof token === 'string') {
                                offset += token.length;
                            } else if (typeof token === 'object' && token.type && token.content) {
                                let tokenContent = token.content;
                                let tokenLength = 0;

                                // Handle nested tokens
                                if (Array.isArray(tokenContent)) {
                                    // For complex tokens with nested content, flatten to string
                                    tokenContent = token.content.map(t => typeof t === 'string' ? t : t.content || '').join('');
                                    tokenLength = tokenContent.length;
                                } else if (typeof tokenContent === 'string') {
                                    tokenLength = tokenContent.length;
                                } else {
                                    tokenLength = String(tokenContent).length;
                                }

                                if (tokenLength > 0) {
                                    const tokenStart = from + offset;
                                    const tokenEnd = tokenStart + tokenLength;

                                    // Create decoration for this token
                                    decorations.push(
                                        Decoration.inline(tokenStart, tokenEnd, {
                                            class: `token ${token.type}`,
                                            'data-token-type': token.type
                                        })
                                    );
                                }

                                offset += tokenLength;
                            }
                        });
                    }

                    processTokens(tokens);
                } catch (error) {
                    console.warn('Syntax highlighting failed for language:', language, error);
                }
            }
        }
    });

    return DecorationSet.create(doc, decorations);
}

export function syntaxHighlightingPlugin(schema) {
    return new Plugin({
        key: 'syntaxHighlighting',
        state: {
            init(_, { doc }) {
                return createCodeBlockDecorations(doc, schema);
            },
            apply(transaction, oldState) {
                if (transaction.docChanged) {
                    return createCodeBlockDecorations(transaction.doc, schema);
                }
                return oldState.map(transaction.mapping, transaction.doc);
            }
        },
        props: {
            decorations(state) {
                return this.getState(state);
            }
        }
    });
} 