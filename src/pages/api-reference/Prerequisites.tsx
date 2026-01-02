import TableOfContents from "../../components/TableOfContents";

export default function Prerequisites() {
  const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "requirements", title: "Requirements" },
    { id: "api-key", title: "Getting API Key" },
  ];

  return (
    <div className="flex flex-1">
      <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Prerequisites of using the API
        </h1>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before you can start using the McFlow API, you need to complete a
            few setup steps to ensure you have the necessary access and
            credentials.
          </p>
        </section>

        <section id="requirements" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Requirements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Access to McFlow Dashboard</li>
            <li>Understanding of FIRS E-Invoicing System</li>
            <li>Valid business registration</li>
          </ul>
        </section>

        <section id="api-key" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Getting Your API Key
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To get your API key:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
            <li>Log in to your McFlow Dashboard</li>
            <li>Navigate to Settings → API Keys</li>
            <li>Click "Generate New API Key"</li>
            <li>Copy and securely store your API key</li>
          </ol>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
            <p className="text-yellow-800 text-sm">
              <strong>Important:</strong> Keep your API key secure and never
              expose it in client-side code or public repositories.
            </p>
          </div>
        </section>
      </div>
      <TableOfContents sections={tocSections} />
    </div>
  );
}
