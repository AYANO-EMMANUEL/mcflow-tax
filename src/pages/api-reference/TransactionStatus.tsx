import TableOfContents from '../../components/TableOfContents';

export default function TransactionStatus() {
  const tocSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'status-codes', title: 'Status Codes' },
    { id: 'lifecycle', title: 'Transaction Lifecycle' },
  ];

  const statuses = [
    {
      code: 'pending',
      description: 'Transaction has been initiated but not yet processed',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-300'
    },
    {
      code: 'processing',
      description: 'Transaction is currently being processed by FIRS',
      color: 'bg-blue-100 text-blue-800 border-blue-300'
    },
    {
      code: 'completed',
      description: 'Transaction has been successfully completed',
      color: 'bg-green-100 text-green-800 border-green-300'
    },
    {
      code: 'failed',
      description: 'Transaction failed due to an error',
      color: 'bg-red-100 text-red-800 border-red-300'
    },
    {
      code: 'cancelled',
      description: 'Transaction was cancelled by the user or system',
      color: 'bg-gray-100 text-gray-800 border-gray-300'
    },
    {
      code: 'expired',
      description: 'Transaction expired before completion',
      color: 'bg-orange-100 text-orange-800 border-orange-300'
    },
  ];

  return (
    <div className="flex flex-1">
      <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Transaction Status
        </h1>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every transaction in the mcflow system has a status that indicates its current state in the 
            processing lifecycle. Understanding these statuses helps you track and manage your transactions effectively.
          </p>
        </section>

        <section id="status-codes" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Status Codes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The following status codes are used throughout the mcflow API:
          </p>
          
          <div className="space-y-4">
            {statuses.map((status, index) => (
              <div key={index} className={`border-2 rounded-lg p-5 ${status.color}`}>
                <div className="flex items-center justify-between mb-2">
                  <code className="text-lg font-mono font-bold">{status.code}</code>
                </div>
                <p className="text-sm">{status.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="lifecycle" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transaction Lifecycle</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A typical transaction flows through the following states:
          </p>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-24 h-12 bg-yellow-100 border-2 border-yellow-300 rounded flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-yellow-800">pending</span>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-24 h-12 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-blue-800">processing</span>
                </div>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div className="w-24 h-12 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center">
                <span className="text-xs font-mono font-bold text-green-800">completed</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> Transactions can also move to <code className="bg-blue-100 px-2 py-1 rounded">failed</code>, 
              <code className="bg-blue-100 px-2 py-1 rounded ml-1">cancelled</code>, or 
              <code className="bg-blue-100 px-2 py-1 rounded ml-1">expired</code> states from any point in the lifecycle.
            </p>
          </div>
        </section>

        <section id="checking-status" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Checking Transaction Status</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can check the status of any transaction using its ID through the appropriate endpoint. 
            The status will be included in the response object.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For real-time updates, consider using <a href="/api-reference/callback-urls" className="text-green-600 hover:text-green-700 underline">Callback URLs</a> to 
            receive notifications when transaction statuses change.
          </p>
        </section>
      </div>
      <TableOfContents sections={tocSections} />
    </div>
  );
}
