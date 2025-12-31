import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for testing and development',
      features: [
        '100 API requests/month',
        'Test environment access',
        'Basic documentation',
        'Community support',
        'FIRS test integration',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '₦50,000',
      period: '/month',
      description: 'For growing businesses',
      features: [
        '10,000 API requests/month',
        'Production environment',
        'Priority support',
        'Webhook callbacks',
        'Advanced analytics',
        'FIRS production integration',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Unlimited API requests',
        'Dedicated infrastructure',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated account manager',
        'Custom pricing',
        'On-premise options',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-green-700">
            Choose the plan that&apos;s right for your business. All plans include access to our API and dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 border rounded-xl ${
                plan.popular
                  ? 'border-green-500 bg-green-50/50'
                  : 'border-green-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-green-800">{plan.price}</span>
                  {plan.period && (
                    <span className="text-green-700">{plan.period}</span>
                  )}
                </div>
                <p className="text-green-700">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.name === 'Enterprise' ? 'mailto:sales@mcflow.ng' : 'https://dashboard.mcflow.ng/signup'}
                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'border border-green-300 text-green-800 hover:bg-green-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                question: 'What happens if I exceed my API limit?',
                answer: 'We&apos;ll notify you when you&apos;re approaching your limit. You can upgrade your plan or purchase additional requests.',
              },
              {
                question: 'Do you offer discounts for annual payments?',
                answer: 'Yes, we offer a 20% discount for annual payments. Contact sales for more information.',
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No, there are no setup fees. You only pay for the plan you choose.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 border-2 border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">{faq.question}</h3>
                <p className="text-green-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-green-700 mb-4">
            Need help choosing a plan? We&apos;re here to help.
          </p>
          <a
            href="mailto:sales@mcflow.ng"
            className="inline-block px-6 py-3 border border-green-300 text-green-800 rounded-lg font-medium hover:bg-green-50 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}


