import TableOfContents from '../components/TableOfContents';

export default function APIReference() {
  const tocSections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'mcflow-api', title: 'mcflow API' },
    { id: 'mcflow-api-features', title: 'mcflow API Features' },
    { id: 'using-mcflow-api', title: 'Using mcflow API' },
    { id: 'api-endpoint-parameters', title: 'API endpoint parameters' },
    { id: 'guaranteed-safety', title: 'Guaranteed safety and integrity' },
  ];

  return (
    <div className="flex flex-1">
      <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          mcflow Nigeria API Introduction
        </h1>

        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Before you proceed, we encourage you to get an overview of mcflow Nigeria and FIRS e-Invoicing 
            and FIRS and FIRS E-Invoicing System.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Use mcflow Nigeria API to integrate your system with FIRS E-Invoicing System for automation 
            and to reduce platform-hopping.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <a href="/api-reference/prerequisites" className="text-green-600 hover:text-green-700 underline">
              Prerequisites of using the API
            </a>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Consider endpoints under resources as references for data required for other endpoints.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li><a href="/api-reference/get-info" className="text-green-600 hover:text-green-700">/info</a></li>
            <li><a href="/api-reference/get-parties" className="text-green-600 hover:text-green-700">/parties</a></li>
            <li><a href="/api-reference/get-items" className="text-green-600 hover:text-green-700">/items</a></li>
            <li><a href="/api-reference/get-invoices" className="text-green-600 hover:text-green-700">/invoices</a></li>
          </ul>
        </section>

        {/* mcflow API */}
        <section id="mcflow-api" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">mcflow API</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Namiri Technologies, through our mcflow Platform, have developed a suite of solutions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>mcflow App (Compatible with Android POS),</li>
            <li>mcflow Dashboard (Web Browser-based Desktop application)</li>
            <li>mcflow API</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            The first two are powered by the mcflow API 🎉
          </p>
        </section>

        {/* mcflow API Features */}
        <section id="mcflow-api-features" className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">mcflow API Features</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The mcflow API is built with various industry standards for API platforms in mind. These include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>RESTful API</li>
            <li>
              OpenAPI (formerly Swagger): An open-source standard that allows a standardized way to generate, 
              document, and test our APIs.
            </li>
            <li>Secure authentication with cryptographically signed JWTs (JSON Web Tokens)</li>
            <li>
              <a href="/api-reference/errors" className="text-green-600 hover:text-green-700 underline">
                Standard HTTP response codes
              </a> for errors and successful requests
            </li>
          </ul>
        </section>

        {/* Using mcflow API */}
        <section id="using-mcflow-api" className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Using mcflow API</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To use this API, you&apos;ll need access to mcflow Dashboard environment to get an API Key. 
            You can test our solutions (mcflow Dashboard, mcflow App and mcflow API) for free using test businesses.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            These are the steps required to get up and running on the API -{' '}
            <a href="/api-reference/prerequisites" className="text-green-600 hover:text-green-700 underline">
              Prerequisites of using mcflow API
            </a>
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-8">
            You can test our solutions before committing
          </h4>
          <p className="text-gray-700 leading-relaxed">
            For commercial conversations, get in touch with{' '}
            <a href="mailto:sales@mcflow.ng" className="text-green-600 hover:text-green-700 underline">
              our team
            </a>
          </p>
        </section>

        {/* API Endpoint Parameters */}
        <section id="api-endpoint-parameters" className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">API endpoint parameters</h3>
          <p className="text-gray-700 leading-relaxed">
            For some API endpoints like Create item, body parameters (also called query parameters) are passed 
            along with the GET, POST, PUT and DELETE requests.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The responses contain attributes related to the passed-in query parameters, which unveil the data 
            model used in the application.
          </p>
        </section>

        {/* Guaranteed Safety */}
        <section id="guaranteed-safety" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Guaranteed safety and integrity</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We comply with industry and security best practices.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            mcflow is built with the best industry practices and to the highest security standards
          </h3>
        </section>
      </div>
      <TableOfContents sections={tocSections} />
    </div>
  );
}
