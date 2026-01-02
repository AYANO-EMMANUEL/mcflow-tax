import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-6">
            About mcflow
          </h1>
          <p className="text-xl text-green-700 mb-12">
            We&apos;re building the future of tax compliance in Nigeria, one API call at a time.
          </p>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h2>
              <p className="text-green-700 mb-4">
                McFlow is Nigeria&apos;s leading tax platform, designed to simplify tax compliance for businesses and developers. 
                We provide seamless integration with FIRS E-Invoicing System, enabling businesses to automate their tax processes 
                and reduce platform-hopping.
              </p>
              <p className="text-green-700">
                Our mission is to make tax compliance accessible, automated, and developer-friendly, helping Nigerian businesses 
                focus on what they do best while we handle the complexities of tax management.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-800 mb-4">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border-2 border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">API Platform</h3>
                  <p className="text-green-700">
                    RESTful API with comprehensive documentation, SDKs, and developer tools for seamless integration.
                  </p>
                </div>
                <div className="p-6 border-2 border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">FIRS Compliance</h3>
                  <p className="text-green-700">
                    Full compliance with Nigerian tax regulations and FIRS E-Invoicing System standards.
                  </p>
                </div>
                <div className="p-6 border-2 border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Developer Tools</h3>
                  <p className="text-green-700">
                    Comprehensive SDKs, webhooks, and tools designed with developers in mind.
                  </p>
                </div>
                <div className="p-6 border-2 border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Enterprise Support</h3>
                  <p className="text-green-700">
                    Dedicated support, SLA guarantees, and custom solutions for enterprise customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Why Choose mcflow?</h2>
              <ul className="space-y-4 text-green-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bank-grade security with industry best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>99.9% uptime with enterprise-grade infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Developer-first approach with comprehensive documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full compliance with FIRS regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated support team for all customers</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="p-6 border-2 border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">General Inquiries</h3>
                  <a href="mailto:hello@mcflow.ng" className="text-green-600 dark:text-green-400 hover:underline">
                    hello@mcflow.ng
                  </a>
                </div>
                <div className="p-6 border-2 border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Developer Support</h3>
                  <a href="mailto:dev@mcflow.ng" className="text-green-600 dark:text-green-400 hover:underline">
                    dev@mcflow.ng
                  </a>
                </div>
                <div className="p-6 border-2 border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Sales</h3>
                  <a href="mailto:sales@mcflow.ng" className="text-green-600 dark:text-green-400 hover:underline">
                    sales@mcflow.ng
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Ready to get started?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/guides"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                >
                  View Documentation
                </Link>
                <Link
                  to="/pricing"
                  className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-green-800 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center"
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
