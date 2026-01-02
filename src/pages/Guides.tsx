import CodeBlock from "../components/CodeBlock";

export default function Guides() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Guides</h1>
          <p className="text-lg text-green-700 mb-12">
            Step-by-step guides to help you integrate McFlow API into your
            application.
          </p>

          {/* Prerequisites */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Prerequisites
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">
                    1
                  </span>
                  Access to McFlow Dashboard
                </h3>
                <p className="text-green-700 mb-4">
                  You&apos;ll need access to the McFlow Dashboard environment to
                  get your API Key. You can test our solutions for free using
                  test businesses.
                </p>
                <a
                  href="https://dashboard.mcflow.ng"
                  className="text-green-600 hover:underline text-sm font-medium"
                >
                  Go to Dashboard →
                </a>
              </div>

              <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">
                    2
                  </span>
                  Understanding of FIRS E-Invoicing
                </h3>
                <p className="text-green-700">
                  Familiarize yourself with FIRS E-Invoicing System
                  requirements. Explore resources endpoints as references for
                  data required for other endpoints.
                </p>
              </div>

              <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">
                    3
                  </span>
                  API Key Generation
                </h3>
                <p className="text-green-700">
                  Generate your API Key from the dashboard. Keep your secret key
                  safe and never expose it in client-side code.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Quick Start
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  1. Get Your API Keys
                </h3>
                <p className="text-green-700 mb-4">
                  Sign up for a McFlow account and navigate to your dashboard to
                  generate API keys. You&apos;ll need both a public key and a
                  secret key.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  2. Authenticate with JWT
                </h3>
                <p className="text-green-700 mb-4">
                  McFlow API uses secure authentication with cryptographically
                  signed JWTs (JSON Web Tokens). Include your API key in the
                  Authorization header:
                </p>
                <CodeBlock
                  id="auth-example"
                  language="http"
                  code={`Authorization: Bearer YOUR_API_KEY`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  3. Make Your First Request
                </h3>
                <p className="text-green-700 mb-4">
                  Here&apos;s a simple example using cURL to get business
                  information:
                </p>
                <CodeBlock
                  id="curl-example"
                  language="bash"
                  code={`curl https://api.mcflow.ng/v2/info \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  4. Using JavaScript/TypeScript
                </h3>
                <CodeBlock
                  id="js-example"
                  language="javascript"
                  code={`const response = await fetch('https://api.mcflow.ng/v2/info', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  5. Using Python
                </h3>
                <CodeBlock
                  id="python-example"
                  language="python"
                  code={`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.mcflow.ng/v2/info',
    headers=headers
)

data = response.json()
print(data)`}
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Key Features
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Callback URLs
                </h3>
                <p className="text-green-700 mb-4">
                  Configure callback URLs to receive real-time notifications
                  about invoice status changes, payment confirmations, and other
                  events.
                </p>
                <CodeBlock
                  id="callback-example"
                  language="json"
                  code={`{
  "callback_url": "https://your-app.com/webhooks/mcflow",
  "events": [
    "invoice.created",
    "invoice.paid",
    "payment.completed"
  ]
}`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Transaction Status
                </h3>
                <p className="text-green-700 mb-4">
                  Track the status of your transactions with standardized status
                  codes:
                </p>
                <div className="space-y-2">
                  {[
                    {
                      status: "pending",
                      description: "Transaction is pending processing",
                    },
                    {
                      status: "processing",
                      description: "Transaction is being processed",
                    },
                    {
                      status: "completed",
                      description: "Transaction completed successfully",
                    },
                    { status: "failed", description: "Transaction failed" },
                    {
                      status: "cancelled",
                      description: "Transaction was cancelled",
                    },
                  ].map((item) => (
                    <div
                      key={item.status}
                      className="flex items-center gap-4 p-3 border-2 border-green-200 rounded-lg"
                    >
                      <span className="font-mono font-semibold text-green-800 w-24">
                        {item.status}
                      </span>
                      <span className="text-green-700">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-lg">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">
                  Keep Your Secret Key Safe
                </h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Never expose your secret key in client-side code or public
                  repositories. Use environment variables or secure key
                  management systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
