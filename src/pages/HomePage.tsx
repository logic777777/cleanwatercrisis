import { ArrowRight, Shield, Droplets, AlertTriangle, Clock, Users, TrendingUp, Award, CheckCircle, Star, Battery, ExternalLink } from 'lucide-react';
import { useRouter } from '../router';
import { useState, useEffect } from 'react';

export function HomePage() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, number: "2.2B", label: "People Without Clean Water" },
    { icon: TrendingUp, number: "87%", label: "Crisis Events Increasing" },
    { icon: Award, number: "4.5/5", label: "Smart Water Box Rating" }
  ];

  const benefits = [
    { icon: Droplets, title: "10 Gallons Daily", description: "Produces fresh water from air" },
    { icon: Battery, title: "Solar Compatible", description: "Works off-grid completely" },
    { icon: Shield, title: "99.9% Pure", description: "Multi-stage filtration" },
    { icon: Clock, title: "60-Day Guarantee", description: "Risk-free trial period" }
  ];

  const recentArticles = [
    {
      title: "The Coming Water Crisis: Are You Prepared?",
      excerpt: "Infrastructure failures affect 150,000+ residents at a time. Learn how to protect your family.",
      path: "/water-crisis",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=400&q=80"
    },
    {
      title: "5 Critical Mistakes People Make Storing Emergency Water",
      excerpt: "Most families are unprepared. Avoid these costly errors that could leave you without safe water.",
      path: "/water-storage-mistakes",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80"
    },
    {
      title: "Atmospheric Water Generators vs Traditional Storage: The Math",
      excerpt: "Breaking down the real costs and benefits of AWG technology versus bottled water storage.",
      path: "/awg-vs-traditional",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="relative overflow-hidden bg-gradient-to-br from-mystic-jade via-ocean-blue to-mystic-jade-700 text-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="h-4 w-4 mr-2 text-coral-accent" />
                <span className="text-sm font-semibold">1,400+ Water Crises in US Since 2019</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Your Tap Water Could Stop <span className="text-coral-accent">Tomorrow</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Don't wait for the crisis. Discover the atmospheric water generator that extracts unlimited clean water from air—even when the grid goes down.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://69ba5eq6wxht9zejehth405q04.hop.clickbank.net/?&traffic_source=website&traffic_type=homepage_hero"
                  target="_blank"
                  rel="nofollow noopener"
                  className="inline-flex items-center justify-center bg-coral-accent hover:bg-coral-accent/90 text-white px-8 py-4 rounded-full font-bold shadow-modern-lg transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  Get Smart Water Box Now
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <button
                  onClick={() => navigate('/review')}
                  className="inline-flex items-center justify-center bg-white text-mystic-jade px-8 py-4 rounded-full font-bold shadow-modern hover:shadow-modern-lg transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  Read Full Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold">4.5/5</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <span className="text-sm">1,247+ Verified Reviews</span>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="absolute -top-4 -right-4 bg-coral-accent text-white px-6 py-3 rounded-full font-bold shadow-modern-lg animate-pulse-slow">
                  Limited Time: Save $200
                </div>
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80"
                  alt="Smart Water Box"
                  className="rounded-2xl shadow-modern-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <Icon className="h-6 w-6 mb-2 text-success-green" />
                        <p className="font-semibold text-sm">{benefit.title}</p>
                        <p className="text-xs text-white/80">{benefit.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-charcoal text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Clock className="h-6 w-6 mr-3 text-coral-accent" />
              <span className="font-semibold text-lg">Special Offer Ends In:</span>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 rounded-lg px-4 py-2 min-w-[70px] text-center">
                <div className="text-2xl font-bold">{countdown.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs text-white/70">Hours</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 min-w-[70px] text-center">
                <div className="text-2xl font-bold">{countdown.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs text-white/70">Minutes</div>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 min-w-[70px] text-center">
                <div className="text-2xl font-bold">{countdown.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs text-white/70">Seconds</div>
              </div>
            </div>
            <a
              href="https://69ba5eq6wxht9zejehth405q04.hop.clickbank.net/?&traffic_source=website&traffic_type=homepage_urgency"
              target="_blank"
              rel="nofollow noopener"
              className="btn-primary bg-coral-accent hover:bg-coral-accent/90 whitespace-nowrap"
            >
              Claim Discount Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center bg-gradient-to-br from-mystic-jade-50 to-white rounded-2xl p-8 shadow-modern">
                <Icon className="h-12 w-12 mx-auto mb-4 text-mystic-jade" />
                <div className="text-4xl font-bold text-charcoal mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal mb-6">
            Why Families Are Switching to Smart Water Box
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional water storage has critical limitations. Discover the revolutionary technology that provides unlimited clean water.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=600&q=80"
              alt="Water crisis"
              className="rounded-2xl shadow-modern-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-charcoal mb-6">
              The Problem: You Can't Trust Your Tap
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Infrastructure Failing</p>
                  <p className="text-gray-600">6 billion gallons lost daily from aging pipes. Contamination risk growing.</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Climate Extremes</p>
                  <p className="text-gray-600">Droughts and floods disrupt water supplies for weeks or months.</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-charcoal">Hidden Contamination</p>
                  <p className="text-gray-600">200M Americans may have PFAS-contaminated drinking water.</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate('/water-crisis')}
              className="mt-8 btn-secondary"
            >
              Learn More About The Crisis
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-mystic-jade to-ocean-blue rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4">
                The Solution: Water Independence
              </h3>
              <p className="text-xl mb-6 text-white/90">
                The Smart Water Box uses atmospheric water generation to extract clean water from humidity—no external water source needed.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Produces 5-10 gallons of pure water daily",
                  "Works completely off-grid with solar power",
                  "99.9% contaminant removal with multi-stage filtration",
                  "Portable design weighs only 35 lbs",
                  "60-day money-back guarantee"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-success-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://69ba5eq6wxht9zejehth405q04.hop.clickbank.net/?&traffic_source=website&traffic_type=homepage_solution"
                  target="_blank"
                  rel="nofollow noopener"
                  className="inline-flex items-center justify-center bg-coral-accent hover:bg-coral-accent/90 text-white px-8 py-4 rounded-full font-bold shadow-modern-lg transform hover:scale-105 transition-all duration-300"
                >
                  Order Now - Save $200
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <button
                  onClick={() => navigate('/review')}
                  className="inline-flex items-center justify-center bg-white text-mystic-jade px-8 py-4 rounded-full font-bold shadow-modern hover:shadow-modern-lg transform hover:scale-105 transition-all duration-300"
                >
                  See Full Review
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80"
                alt="Smart Water Box solution"
                className="rounded-2xl shadow-modern-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Essential Reading for Water Preparedness
            </h2>
            <p className="text-xl text-gray-600">Expert guides to protect your family from water emergencies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => navigate(article.path)}>
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-mystic-jade">
                    {article.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-mystic-jade transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-mystic-jade font-semibold flex items-center group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-pale-white to-mystic-jade-50 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
            Get Your FREE Water Emergency Checklist
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 12,500+ families preparing for water emergencies. Get expert tips, crisis alerts, and exclusive discount offers.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-mystic-jade-200 focus:border-mystic-jade focus:outline-none text-charcoal"
              required
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Get Free Checklist
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime. Your email is safe with us.</p>
        </div>
      </div>
    </div>
  );
}
