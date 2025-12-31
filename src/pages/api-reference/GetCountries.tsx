import TableOfContents from '../../components/TableOfContents';
import CodeBlock from '../../components/CodeBlock';

export default function GetCountries() {
  const tocSections = [
    { id: 'endpoint', title: 'Endpoint' },
    { id: 'request', title: 'Request' },
    { id: 'response', title: 'Response' },
    { id: 'example', title: 'Example' },
  ];

  return (
    <div className="flex flex-1">
      <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Get FIRS Countries
        </h1>

        <section id="endpoint" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Endpoint</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 text-xs font-mono font-bold rounded-md bg-blue-500 text-white">
                GET
              </span>
              <code className="text-sm font-mono text-gray-800">/v2/firs/countries</code>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Retrieves the list of countries recognized by FIRS for tax purposes.
          </p>
        </section>

        <section id="request" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Request</h2>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Headers</h3>
          <CodeBlock
            language="http"
            code={`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
          />
        </section>

        <section id="response" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Response</h2>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Success Response (200 OK)</h3>
          <CodeBlock
            language="json"
            code={`{
  "status": "success",
  "data": [
    {
      "id": 1,
      "code": "NG",
      "name": "Nigeria"
    },
    {
      "id": 2,
      "code": "US",
      "name": "United States"
    }
  ]
}`}
          />
        </section>

        <section id="example" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Example</h2>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">cURL</h3>
          <CodeBlock
            language="bash"
            code={`curl https://api.mcflow.ng/v2/firs/countries \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
          />

          <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">JavaScript</h3>
          <CodeBlock
            language="javascript"
            code={`const response = await fetch('https://api.mcflow.ng/v2/firs/countries', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
          />
        </section>
      </div>
      <TableOfContents sections={tocSections} />
    </div>
  );
}
