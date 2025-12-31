'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function APIReference() {
  const [activeSection, setActiveSection] = useState<string | null>('Resources');

  const apiSections = [
    {
      title: 'Resources',
      endpoints: [
        { method: 'GET', path: '/v2/firs/countries', description: 'Get FIRS countries' },
        { method: 'GET', path: '/v2/firs/currencies', description: 'Get FIRS currencies' },
        { method: 'GET', path: '/v2/firs/tax-categories', description: 'Get FIRS tax categories' },
        { method: 'GET', path: '/v2/firs/invoice-types', description: 'Get FIRS invoice types' },
        { method: 'GET', path: '/v2/firs/payment-means', description: 'Get FIRS payment means' },
        { method: 'GET', path: '/v2/firs/states', description: 'Get FIRS states' },
        { method: 'GET', path: '/v2/firs/local-governments', description: 'Get FIRS local governments' },
      ]
    },
    {
      title: 'Business',
      endpoints: [
        { method: 'GET', path: '/v2/info', description: 'Get business information' },
      ]
    },
    {
      title: 'Parties',
      endpoints: [
        { method: 'GET', path: '/v2/parties', description: 'Get all parties' },
        { method: 'POST', path: '/v2/parties', description: 'Create a new party' },
        { method: 'GET', path: '/v2/parties/{id}', description: 'Get a specific party' },
      ]
    },
    {
      title: 'Items',
      endpoints: [
        { method: 'GET', path: '/v2/items', description: 'Get all items' },
        { method: 'POST', path: '/v2/items', description: 'Create a new item' },
        { method: 'GET', path: '/v2/items/{id}', description: 'Get a specific item' },
      ]
    },
    {
      title: 'Invoices',
      endpoints: [
        { method: 'GET', path: '/v2/invoices', description: 'Get all invoices' },
        { method: 'POST', path: '/v2/invoices', description: 'Create a new invoice' },
        { method: 'GET', path: '/v2/invoices/{id}', description: 'Get a specific invoice' },
        { method: 'PUT', path: '/v2/invoices/{id}/payment-status', description: 'Update invoice payment status' },
        { method: 'POST', path: '/v2/credit-notes', description: 'Create a credit note' },
        { method: 'POST', path: '/v2/debit-notes', description: 'Create a debit note' },
      ]
    },
    {
      title: 'Tax Filing',
      endpoints: [
        { method: 'POST', path: '/v2/tax-filing', description: 'Submit tax returns' },
        { method: 'GET', path: '/v2/tax-filing/{id}', description: 'Get filing status' },
        { method: 'GET', path: '/v2/tax-filing', description: 'List all filings' },
      ]
    },
    {
      title: 'Payments',
      endpoints: [
        { method: 'POST', path: '/v2/payments', description: 'Initiate tax payment' },
        { method: 'GET', path: '/v2/payments/{id}', description: 'Check payment status' },
        { method: 'GET', path: '/v2/payments', description: 'List all payments' },
      ]
    },
    {
      title: 'Compliance',
      endpoints: [
        { method: 'GET', path: '/v2/compliance/status', description: 'Check compliance status' },
        { method: 'GET', path: '/v2/compliance/reports', description: 'Get compliance reports' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-green-800 mb-4">API Reference</h1>
            <p className="text-lg text-green-700">
              Explore our comprehensive API endpoints organized by resource type. All endpoints follow RESTful conventions and use standard HTTP methods.
            </p>
          </div>

          <div className="mb-6 p-6 bg-green-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Base URL</h3>
            <code className="text-green-400 font-mono">https://api.mcflow.ng</code>
            <p className="text-sm text-green-100 mt-2">
              All API requests should be made to this base URL. The current API version is v2.
            </p>
          </div>

          <div className="space-y-6">
            {apiSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white border-2 border-green-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveSection(activeSection === section.title ? null : section.title)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-green-50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-green-800">{section.title}</h3>
                  <svg
                    className={`w-5 h-5 text-white0 dark:text-green-100 transition-transform ${
                      activeSection === section.title ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeSection === section.title && (
                  <div className="px-6 pb-6 space-y-3 border-t border-green-200 pt-4">
                    {section.endpoints.map((endpoint, index) => (
                      <div key={index} className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 text-xs font-mono font-semibold rounded ${
                            endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                            endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-green-100'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-green-800">{endpoint.path}</code>
                        </div>
                        <p className="text-sm text-green-700 ml-16">{endpoint.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


