'use client'

import { useEffect } from 'react';

const CLIENT_SIDE_HIGHLIGHTER_SCRIPT = `
// Simple syntax highlighting without external dependencies
function highlightCode() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(codeBlock => {
    const pre = codeBlock.parentElement;
    if (!pre) return;
    
    // Apply dark theme
    pre.style.backgroundColor = '#1e1e1e';
    pre.style.color = '#d4d4d4';
    pre.style.border = '1px solid #333';
    pre.style.borderRadius = '8px';
    pre.style.padding = '16px';
    pre.style.fontFamily = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
    pre.style.fontSize = '14px';
    pre.style.lineHeight = '1.6';
    pre.style.overflowX = 'auto';
    pre.style.position = 'relative';
    
    const code = codeBlock.textContent || '';
    let highlightedCode = code;
    
    // Basic JavaScript/TypeScript highlighting
    highlightedCode = highlightedCode
      // Keywords
      .replace(/\\b(const|let|var|function|class|interface|type|enum|import|export|from|as|return|if|else|for|while|switch|case|break|default|try|catch|finally|async|await|new|this|extends|implements|private|public|protected|static|get|set|super|void|yield)\\b/g, '<span style="color: #569cd6; font-weight: 500;">$1</span>')
      
      // Strings
      .replace(/(['"\`])((?:\\\\.|(?!\\1)[^\\\\\\r\\n])*?)\\1/g, '<span style="color: #ce9178;">$1$2$1</span>')
      
      // Numbers
      .replace(/\\b(\\d+(?:\\.\\d+)?)\\b/g, '<span style="color: #b5cea8;">$1</span>')
      
      // Comments
      .replace(/(\/\/.*?)$/gm, '<span style="color: #6a9955; font-style: italic;">$1</span>')
      .replace(/(\/\\*[\\s\\S]*?\\*\/)/g, '<span style="color: #6a9955; font-style: italic;">$1</span>')
      
      // Functions
      .replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\\s*\\(/g, '<span style="color: #dcdcaa;">$1</span>(')
      
      // Types/Classes (capitalized words)
      .replace(/\\b([A-Z][a-zA-Z0-9_]*)\\b/g, '<span style="color: #4ec9b0;">$1</span>')
      
      // Operators
      .replace(/([=!<>+\\-*/%&|^~?:;,.])/g, '<span style="color: #d4d4d4;">$1</span>');
    
    codeBlock.innerHTML = highlightedCode;
    
    // Add language indicator if available
    let language = 'code';
    const classNames = codeBlock.className.split(' ');
    for (const className of classNames) {
      if (className.startsWith('language-')) {
        language = className.replace('language-', '');
        break;
      }
    }
    
    if (pre.hasAttribute('data-language')) {
      language = pre.getAttribute('data-language');
    }
    
    // Add language badge
    const badge = document.createElement('div');
    badge.textContent = language.toUpperCase();
    badge.style.position = 'absolute';
    badge.style.top = '8px';
    badge.style.right = '12px';
    badge.style.background = 'rgba(255, 255, 255, 0.1)';
    badge.style.color = '#a0a0a0';
    badge.style.padding = '2px 8px';
    badge.style.borderRadius = '4px';
    badge.style.fontSize = '12px';
    badge.style.fontWeight = '500';
    badge.style.letterSpacing = '0.5px';
    pre.appendChild(badge);
  });
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', highlightCode);
} else {
  highlightCode();
}

// Also run on dynamic content changes
const observer = new MutationObserver(() => {
  setTimeout(highlightCode, 100);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
`;

export default function ClientSideHighlighter() {
  useEffect(() => {
    // Create and inject the script
    const script = document.createElement('script');
    script.textContent = CLIENT_SIDE_HIGHLIGHTER_SCRIPT;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      try {
        document.head.removeChild(script);
      } catch (e) {
        // Script might already be removed
      }
    };
  }, []);

  return null; // This component doesn't render anything
} 