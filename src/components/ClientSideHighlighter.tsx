'use client'

import { useEffect } from 'react';

export default function ClientSideHighlighter() {
  useEffect(() => {
    const highlightFn = () => {
      /* BEGIN HIGHLIGHTER */
      function highlightCode() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(codeBlock => {
          const pre = codeBlock.parentElement;
          if (!pre) return;
          pre.style.cssText = `background:#1e1e1e;color:#d4d4d4;border:1px solid #333;border-radius:8px;padding:16px;font-family:SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:14px;line-height:1.6;overflow-x:auto;position:relative;`;
          const code = codeBlock.textContent || '';
          let highlightedCode = code;
          try {
            const keywords = ['const','let','var','function','class','interface','type','enum','import','export','from','as','return','if','else','for','while','switch','case','break','default','try','catch','finally','async','await','new','this','extends','implements','private','public','protected','static'];
            keywords.forEach(kw=>{
              const re = new RegExp(`\\b${kw}\\b`,`g`);
              highlightedCode = highlightedCode.replace(re,`<span style=\"color:#569cd6;font-weight:500;\">${kw}</span>`);
            });
            highlightedCode = highlightedCode
              .replace(/"([^\"]*)"/g,'<span style="color:#ce9178;">"$1"</span>')
              .replace(/'([^']*)'/g,"<span style='color:#ce9178;'>'$1'</span>")
              .replace(/\b\d+\.?\d*\b/g,'<span style="color:#b5cea8;">$&</span>')
              .replace(/\/\/.*$/gm,'<span style="color:#6a9955;font-style:italic;">$&</span>');
          } catch(e){console.warn('highlight fail',e);}
          codeBlock.innerHTML = highlightedCode;
          let language='code';
          const m=codeBlock.className.match(/language-(\w+)/);
          if(m)language=m[1];
          const badge=document.createElement('div');
          badge.textContent=language.toUpperCase();
          badge.style.cssText='position:absolute;top:8px;right:12px;background:rgba(255,255,255,0.1);color:#a0a0a0;padding:2px 8px;border-radius:4px;font-size:12px;font-weight:500;letter-spacing:.5px;';
          pre.appendChild(badge);
        });
      }
      if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',highlightCode);else highlightCode();
      const obs=new MutationObserver(()=>setTimeout(highlightCode,100));
      obs.observe(document.body,{childList:true,subtree:true});
      /* END HIGHLIGHTER */
    };

    const script = document.createElement('script');
    script.textContent = `(${highlightFn.toString()})();`;
    document.head.appendChild(script);
    return () => {
      try { document.head.removeChild(script); } catch {}
    };
  }, []);
  return null;
} 