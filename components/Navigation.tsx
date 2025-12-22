'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">mcflow</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2">API</span>
          </Link>
          <div className="flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Ask AI or search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="/guides" 
              className={`text-sm transition-colors ${isActive('/guides') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'}`}
            >
              Guides
            </Link>
            <Link 
              href="/api-reference" 
              className={`text-sm transition-colors ${isActive('/api-reference') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'}`}
            >
              API Reference
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm transition-colors ${isActive('/pricing') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'}`}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className={`text-sm transition-colors ${isActive('/about') ? 'text-green-600 dark:text-green-400 font-medium' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'}`}
            >
              About
            </Link>
            <a
              href="https://dashboard.mcflow.ng"
              className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}


