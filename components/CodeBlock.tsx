'use client';

import { useState } from 'react';

export default function CodeBlock({ code, language }: { code: string; language: string; id?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
        <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 pr-24 bg-zinc-900 dark:bg-zinc-950 rounded-lg overflow-x-auto text-sm font-mono text-zinc-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}


