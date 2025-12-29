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
        <span className="text-xs text-green-600 uppercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 pr-24 bg-green-900 rounded-lg overflow-x-auto text-sm font-mono text-green-50">
        <code>{code}</code>
      </pre>
    </div>
  );
}


