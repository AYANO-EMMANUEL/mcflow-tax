import TableOfContents from '../../components/TableOfContents';
import CodeBlock from '../../components/CodeBlock';

export default function Errors() {
  const tocSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'http-codes', title: 'HTTP Status Codes' },
    { id: 'error-format', title: 'Error Response Format' },
    { id: 'common-errors', title: 'Common Errors' },
  ];

  const httpCodes = [
    { code: '200', name: 'OK', description: 'Request succeeded' },
    { code: '201', name: 'Created', description: 'Resource successfully created' },
    { code: '400', name: 'Bad Request', description: 'Invalid request parameters' },
    { code: '401', name: 'Unauthorized', description: 'Invalid or missing API key' },
    { code: '403', name: 'Forbidden', description: 'Insufficient permissions' },
    { code: '404', name: 'Not Found', description: 'Resource not found' },
    { code: '422', name: 'Unprocessable Entity', description: 'Validation error' },
    { code: '429', name: 'Too Many Requests', description: 'Rate limit exceeded' },
    { code: '500', name: 'Internal Server Error', description: 'Server error occurred' },
    { code: '503', name: 'Service Unavailable', description: 'Service temporarily unavailable' },
  ];

  return (
    <div className="flex flex-1">
      <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Errors and HTTP Response Codes
        </h1>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The McFlow API uses standard HTTP response codes to indicate the success or failure of requests. 
            Understanding these codes helps you handle errors appropriately in your application.
          </p>
        </section>

        <section id="http-codes" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HTTP Status Codes</h2>
          
          <div className="space-y-3">
            {httpCodes.map((item, index) => (
              <div key={index} className={`border-l-4 p-4 rounded-r-lg ${
                item.code.startsWith('2') ? 'bg-green-50 border-green-500' :
                item.code.startsWith('4') ? 'bg-yellow-50 border-yellow-500' :
                'bg-red-50 border-red-500'
              }`}>
                <div className="flex items-center gap-3 mb-1">
                  <code className="text-lg font-mono font-bold text-gray-900">{item.code}</code>
                  <span className="font-semibold text-gray-900">{item.name}</span>
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="error-format" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Response Format</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When an error occurs, the API returns a JSON response with the following structure:
          </p>
          <CodeBlock
            language="json"
            code={`{
  "status": "error",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": [
      {
        "field": "amount",
        "message": "Amount must be greater than 0"
      },
      {
        "field": "currency",
        "message": "Currency is required"
      }
    ]
  }
}`}
          />
        </section>

        <section id="common-errors" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Errors</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Authentication Errors</h3>
              <CodeBlock
                language="json"
                code={`{
  "status": "error",
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid API key"
  }
}`}
              />
              <p className="text-sm text-gray-600 mt-2">
                <strong>Solution:</strong> Verify your API key is correct and included in the Authorization header.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Validation Errors</h3>
              <CodeBlock
                language="json"
                code={`{
  "status": "error",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "party_id",
        "message": "Party ID is required"
      }
    ]
  }
}`}
              />
              <p className="text-sm text-gray-600 mt-2">
                <strong>Solution:</strong> Check the details array for specific field errors and correct your request.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Rate Limit Errors</h3>
              <CodeBlock
                language="json"
                code={`{
  "status": "error",
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later.",
    "retry_after": 60
  }
}`}
              />
              <p className="text-sm text-gray-600 mt-2">
                <strong>Solution:</strong> Wait for the time specified in retry_after (in seconds) before making another request.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Best Practices</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
            <li>Always check the HTTP status code before parsing the response</li>
            <li>Implement proper error handling for all API calls</li>
            <li>Log error details for debugging purposes</li>
            <li>Display user-friendly error messages to end users</li>
            <li>Implement retry logic with exponential backoff for 5xx errors</li>
          </ul>
        </div>
      </div>
      <TableOfContents sections={tocSections} />
    </div>
  );
}
