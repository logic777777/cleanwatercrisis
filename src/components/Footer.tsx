import { Droplets, Mail, Shield, FileText, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { useRouter } from '../router';

export function Footer() {
  const { navigate } = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-charcoal to-mystic-jade-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-mystic-jade-300" />
              <span className="ml-2 text-xl font-bold">CleanWaterCrisis</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted source for water crisis awareness and emergency preparedness solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-mystic-jade-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('/review')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Smart Water Box Review
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/water-crisis')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Water Crisis Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/emergency-water')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Emergency Prep
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/atmospheric-water')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  AWG Technology
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-mystic-jade-300">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('/smart-water-vs-storage')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Comparison Guide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/diy-vs-smart-water')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  DIY vs Smart Solutions
                </button>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-mystic-jade-300">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('/privacy')} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <Shield className="h-3 w-3 mr-1" /> Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/terms')} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <FileText className="h-3 w-3 mr-1" /> Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <Mail className="h-3 w-3 mr-1" /> Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-mystic-jade-900/50 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-300">
              <strong>Affiliate Disclosure:</strong> This website contains affiliate links. We may earn a commission from purchases made through our links to products like the Smart Water Box via ClickBank. This comes at no additional cost to you. All content is for informational purposes only.
            </p>
          </div>
          
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} CleanWaterCrisis.online. All rights reserved.</p>
            <p className="mt-2">
              ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
