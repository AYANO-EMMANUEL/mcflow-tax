import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-green-700 font-medium">API v2.0 Available</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-green-800 mb-6 leading-tight">
            Integrate with Nigeria&apos;s
            <span className="block text-green-600">Tax Platform</span>
          </h1>
          <p className="text-xl text-green-700 mb-8 leading-relaxed">
            Use <strong>mcflow API</strong> to integrate your system with FIRS E-Invoicing System for automation and to reduce platform-hopping. 
            Built for developers, trusted by businesses across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/guides"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/api-reference"
              className="px-6 py-3 border-2 border-green-600 text-green-700 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              View API Reference
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border-2 border-green-200 rounded-xl hover:border-green-500 bg-green-50/50 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">FIRS Compliant</h3>
            <p className="text-green-700">
              Full compliance with Nigerian tax regulations and FIRS E-Invoicing System standards. Bank-grade security.
            </p>
          </div>
          <div className="p-6 border-2 border-green-200 rounded-xl hover:border-green-500 bg-green-50/50 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">RESTful & Fast</h3>
            <p className="text-green-700">
              RESTful API with OpenAPI specification. 99.9% uptime with sub-200ms response times. Built for scale.
            </p>
          </div>
          <div className="p-6 border-2 border-green-200 rounded-xl hover:border-green-500 bg-green-50/50 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Developer First</h3>
            <p className="text-green-700">
              Comprehensive documentation, code examples, SDKs, JWT authentication, and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-green-50 my-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Quick Start</h2>
          <p className="text-lg text-green-700 mb-8">
            Get up and running with mcflow API in minutes.
          </p>
          <CodeBlock
            id="quickstart-curl"
            language="bash"
            code={`curl https://api.mcflow.ng/v2/info \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
          />
          <div className="mt-6">
            <Link
              to="/guides"
              className="text-green-600 hover:text-green-700 hover:underline font-medium"
            >
              Read the full guide →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
