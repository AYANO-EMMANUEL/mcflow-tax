import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function APISidebar() {
  const location = useLocation();
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  
  const sections = [
    { title: 'mcflow Nigeria API Introduction', href: '/api-reference' },
    { title: 'Prerequisites of using the API', href: '/api-reference/prerequisites' },
    { title: 'Feature: Callback URLs', href: '/api-reference/callback-urls' },
    { title: 'Transaction Status', href: '/api-reference/transaction-status' },
    { title: 'Errors and HTTP response codes', href: '/api-reference/errors' },
  ];

  const apiEndpoints = [
    {
      category: 'Resources',
      endpoints: [
        { name: 'Get FIRS Countries', method: 'GET', href: '/api-reference/get-resources-countries' },
        { name: 'Get FIRS Currencies', method: 'GET', href: '/api-reference/get-resources-currencies' },
        { name: 'Get FIRS Tax Categories', method: 'GET', href: '/api-reference/get-resources-tax-categories' },
        { name: 'Get FIRS Invoice Types', method: 'GET', href: '/api-reference/get-resources-invoice-types' },
        { name: 'Get FIRS Payment Means', method: 'GET', href: '/api-reference/get-resources-payment-means' },
        { name: 'Get FIRS Local Governments', method: 'GET', href: '/api-reference/get-resources-local-governments' },
        { name: 'Get FIRS States', method: 'GET', href: '/api-reference/get-resources-states' },
      ]
    },
    {
      category: 'Business',
      endpoints: [
        { name: 'Get FIRS Info', method: 'GET', href: '/api-reference/get-info' },
      ]
    },
    {
      category: 'Parties',
      endpoints: [
        { name: 'Get FIRS Parties', method: 'GET', href: '/api-reference/get-parties' },
        { name: 'Create Party', method: 'POST', href: '/api-reference/post-parties' },
        { name: 'Get a business party', method: 'GET', href: '/api-reference/get-parties-party-id' },
      ]
    },
    {
      category: 'Items',
      endpoints: [
        { name: 'Get FIRS Items', method: 'GET', href: '/api-reference/get-items' },
        { name: 'Create Item', method: 'POST', href: '/api-reference/post-items' },
        { name: 'Get a business item', method: 'GET', href: '/api-reference/get-items-item-id' },
      ]
    },
    {
      category: 'Invoices',
      endpoints: [
        { name: 'Get FIRS Invoices', method: 'GET', href: '/api-reference/get-invoices' },
        { name: 'Create Invoice', method: 'POST', href: '/api-reference/post-invoices' },
        { name: 'Get FIRS Credit Notes', method: 'GET', href: '/api-reference/get-credit-notes' },
        { name: 'Create Credit Note', method: 'POST', href: '/api-reference/post-credit-notes' },
        { name: 'Get FIRS Debit Notes', method: 'GET', href: '/api-reference/get-debit-notes' },
        { name: 'Create Debit Note', method: 'POST', href: '/api-reference/post-debit-notes' },
        { name: 'Get a business invoice', method: 'GET', href: '/api-reference/get-invoices-invoice-id' },
        { name: 'Update an invoice payment status', method: 'PUT', href: '/api-reference/put-invoices-invoice-id-payment-status' },
        { name: 'Get a business invoice by the invoice reference number', method: 'GET', href: '/api-reference/get-invoices-irn-invoice-reference-number' },
        { name: 'Create invoice with the party and items information', method: 'POST', href: '/api-reference/post-detailed-invoices' },
        { name: 'Create credit note with the item code in place of the item ID', method: 'POST', href: '/api-reference/post-credit-notes-with-item-codes' },
        { name: 'Create debit note with the item code in place of the item ID', method: 'POST', href: '/api-reference/post-debit-notes-with-item-codes' },
      ]
    },
  ];

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          MCFLOW API REFERENCE
        </h2>
        
        {/* Main sections */}
        <nav className="space-y-1 mb-8">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.href}
              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                location.pathname === section.href
                  ? 'bg-green-50 text-green-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {section.title}
            </Link>
          ))}
        </nav>

        {/* API Endpoints */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          mcflow Nigeria API
        </h3>
        <nav className="space-y-2">
          {apiEndpoints.map((group, groupIndex) => (
            <div key={groupIndex}>
              <button
                onClick={() => toggleCategory(group.category)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <span>{group.category}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openCategories.includes(group.category) ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {openCategories.includes(group.category) && (
                <ul className="space-y-0.5 mt-1 ml-2">
                  {group.endpoints.map((endpoint, endpointIndex) => (
                    <li key={endpointIndex}>
                      <Link
                        to={endpoint.href}
                        className={`flex items-start gap-2 px-3 py-1.5 text-sm rounded-md transition-colors group ${
                          location.pathname === endpoint.href
                            ? 'bg-green-50 text-green-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <span className={`text-xs font-mono font-semibold mt-0.5 flex-shrink-0 ${
                          endpoint.method === 'GET' ? 'text-blue-600' : 
                          endpoint.method === 'POST' ? 'text-green-600' :
                          endpoint.method === 'PUT' ? 'text-orange-600' :
                          'text-gray-600'
                        }`}>
                          {endpoint.method.toLowerCase()}
                        </span>
                        <span className="text-xs leading-relaxed">{endpoint.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
