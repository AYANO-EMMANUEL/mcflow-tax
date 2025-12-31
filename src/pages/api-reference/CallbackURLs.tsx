import TableOfContents from '../../components/TableOfContents';
import CodeBlock from '../../components/CodeBlock';

export default function CallbackURLs() {
  const tocSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'setup', title: 'Setting Up Callbacks' },
    { id: 'events', title: 'Supported Events' },
    { id: 'payload', title: 'Payload Structure' },
    { id: 'security', title: 'Security' },
  ];

  return (
    <div className="flex flex-1">
      <div className="flex-1 max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Feature: Callback URLs
        </h1>

        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Callback URLs (also known as webhooks) allow you to receive real-time notifications when events 
            occur in your mcflow account. This enables you to automate workflows and keep your systems in sync.
          </p>
        </section>

        <section id="setup" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Up Callbacks</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To configure callback URLs:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
            <li>Log in to your mcflow Dashboard</li>
            <li>Navigate to Settings → Webhooks</li>
            <li>Click "Add Webhook"</li>
            <li>Enter your callback URL</li>
            <li>Select the events you want to receive</li>
            <li>Save your configuration</li>
          </ol>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Example Configuration</h3>
          <CodeBlock
            language="json"
            code={`{
  "callback_url": "https://your-app.com/webhooks/mcflow",
  "events": [
    "invoice.created",
    "invoice.paid",
    "payment.completed",
    "party.created"
  ],
  "secret": "your_webhook_secret"
}`}
          />
        </section>

        <section id="events" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported Events</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-50 p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Invoice Events</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                <li><code className="text-xs bg-gray-100 px-2 py-1 rounded">invoice.created</code> - New invoice created</li>
                <li><code className="text-xs bg-gray-100 px-2 py-1 rounded">invoice.paid</code> - Invoice marked as paid</li>
                <li><code className="text-xs bg-gray-100 px-2 py-1 rounded">invoice.cancelled</code> - Invoice cancelled</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Payment Events</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                <li><code className="text-xs bg-gray-100 px-2 py-1 rounded">payment.initiated</code> - Payment started</li>
                <li><code className="text-xs bg-gray-100 px-2 py-1 rounded">payment.completed</code> - Payment successful</li>
                <li><code className="text-xs bg-gray-100 px-2 py-1 rounded">payment.failed</code> - Payment failed</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Party Events</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                <li><code className="text-xs bg-gray-100 px-2 py-1 rounded">party.created</code> - New party created</li>
                <li><code className="text-xs bg-gray-100 px-2 py-1 rounded">party.updated</code> - Party information updated</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="payload" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payload Structure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When an event occurs, mcflow will send a POST request to your callback URL with the following structure:
          </p>
          <CodeBlock
            language="json"
            code={`{
  "event": "invoice.created",
  "timestamp": "2025-12-31T14:00:00Z",
  "data": {
    "id": "inv_123456",
    "reference_number": "INV-2025-001",
    "amount": 50000,
    "currency": "NGN",
    "status": "pending",
    "party": {
      "id": "party_789",
      "name": "Example Company Ltd"
    }
  },
  "signature": "sha256_signature_here"
}`}
          />
        </section>

        <section id="security" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Security</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All webhook payloads are signed using HMAC-SHA256. You should verify the signature to ensure 
            the request is from mcflow.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Verifying Signatures</h3>
          <CodeBlock
            language="javascript"
            code={`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(JSON.stringify(payload)).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}

// Usage
const isValid = verifyWebhookSignature(
  req.body,
  req.headers['x-mcflow-signature'],
  process.env.WEBHOOK_SECRET
);`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
            <p className="text-yellow-800 text-sm">
              <strong>Important:</strong> Always verify webhook signatures before processing the payload 
              to prevent unauthorized requests.
            </p>
          </div>
        </section>
      </div>
      <TableOfContents sections={tocSections} />
    </div>
  );
}
