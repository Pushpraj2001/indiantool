import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass-footer bg-gradient-to-r from-orange-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo and Description */}
          <div className="mb-8 text-center">
            <div className="indian-logo mx-auto mb-4">
              <span className="om-symbol">ॐ</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Indian Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">Your All-in-One Toolset</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FaGithub className="text-2xl" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Tools</h4>
              <ul className="space-y-2">
                <li><a href="/tools/text" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Text Tools</a></li>
                <li><a href="/tools/ai" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">AI Tools</a></li>
                <li><a href="/tools/conversion" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Conversion</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Contact</a></li>
                <li><a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">FAQ</a></li>
                <li><a href="/documentation" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Documentation</a></li>
                <li><a href="/api" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                <li><a href="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p> {new Date().getFullYear()} Indian Tools. All rights reserved.</p>
            <p className="mt-2">Made with in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;