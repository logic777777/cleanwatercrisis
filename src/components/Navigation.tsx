import { useState, useEffect } from 'react';
import { Menu, X, Droplets, Home, Star, Shield, Info } from 'lucide-react';
import { useRouter } from '../router';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigate, currentPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add the links back in
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/review', label: 'Smart Water Box Review', icon: Star, highlight: true },
    { path: '/water-crisis', label: 'Water Crisis', icon: Info },
    { path: '/emergency-water', label: 'Emergency Prep', icon: Shield },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-lg shadow-modern'
        : 'bg-gradient-to-r from-mystic-jade-500/95 to-ocean-blue/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <Droplets className={`h-10 w-10 ${scrolled ? 'text-mystic-jade' : 'text-white'} transform group-hover:rotate-12 transition-all`} />
              <div className="absolute inset-0 bg-mystic-jade-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <span className={`ml-3 text-xl font-display font-bold ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              CleanWaterCrisis
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`
                    flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${currentPath === item.path
                      ? scrolled
                        ? 'bg-mystic-jade text-white shadow-lg'
                        : 'bg-white/20 text-white backdrop-blur-sm'
                      : scrolled
                        ? 'text-charcoal hover:bg-mystic-jade-50'
                        : 'text-white/90 hover:bg-white/10'
                    }
                    ${item.highlight ? 'ml-2 ring-2 ring-success-green ring-offset-2' : ''}
                  `}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="md-hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${scrolled ? 'text-charcoal hover:bg-mystic-jade-50' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md-hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-modern-lg animate-slide-up">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center px-4 py-3 rounded-xl text-left transition-all
                    ${currentPath === item.path
                      ? 'bg-mystic-jade text-white shadow-lg'
                      : 'text-charcoal hover:bg-mystic-jade-50'
                    }
                  `}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
