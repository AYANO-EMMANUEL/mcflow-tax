import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-green-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-lg font-bold text-green-800">mcflow</span>
            </div>
            <p className="text-sm text-green-700">
              Nigeria&apos;s leading tax platform for developers and businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-green-800 mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/guides" className="text-green-700 hover:text-green-600 transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/api-reference" className="text-green-700 hover:text-green-600 transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <a href="https://docs.mcflow.ng" className="text-green-700 hover:text-green-600 transition-colors">
                  Full Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-800 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-green-700 hover:text-green-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-green-700 hover:text-green-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="mailto:dev@mcflow.ng" className="text-green-700 hover:text-green-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/mcflow" className="text-green-700 hover:text-green-600 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://dashboard.mcflow.ng" className="text-green-700 hover:text-green-600 transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="mailto:support@mcflow.ng" className="text-green-700 hover:text-green-600 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-green-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-green-700">
            © {new Date().getFullYear()} mcflow. All rights reserved. | Nigerian Tax Platform
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-green-700 hover:text-green-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-green-700 hover:text-green-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
