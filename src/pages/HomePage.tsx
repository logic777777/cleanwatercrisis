import { ArrowRight, Shield, Droplets, AlertTriangle, Users, TrendingUp, Award } from 'lucide-react';
import { useRouter } from '../router';

export function HomePage() {
  const { navigate } = useRouter();

  const stats = [
    { icon: Users, number: "2.2B", label: "People Without Clean Water" },
    { icon: TrendingUp, number: "1,400+", label: "Water Crises Since 2019 (US)" },
    { icon: Award, number: "6", label: "Major Contamination Threats" }
  ];

  const features = [
    {
      icon: AlertTriangle,
      title: "The Crisis is Real",
      description: "From infrastructure failures to hidden contaminants, water security is becoming critical. Our research-backed guides help you understand the threats.",
      link: { text: "Understand the Threats", path: "/water-contamination" }
    },
    {
      icon: Shield,
      title: "Be Prepared",
      description: "Learn from the mistakes others make when preparing for water emergencies. Practical strategies backed by data and expert research.",
      link: { text: "Avoid Common Mistakes", path: "/water-storage-mistakes" }
    },
    {
      icon: Droplets,
      title: "Explore Solutions",
      description: "Understand the technology and costs behind different water security approaches. Make informed decisions for your family.",
      link: { text: "Compare Solutions", path: "/awg-vs-traditional" }
    }
  ];

  const recentArticles = [
    {
      title: "Hidden Water Contamination: Threats Your Filter Can't Stop",
      excerpt: "PFAS, lead, microplastics, bacteria, and more—6 major contaminants threatening your drinking water and what you can do about them.",
      path: "/water-contamination",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1576091160568-112191c7597c?w=400&q=80",
      category: "Safety"
    },
    {
      title: "5 Critical Mistakes People Make Storing Emergency Water",
      excerpt: "60% of families are unprepared. Learn the costly errors that could leave you without safe water when you need it most.",
      path: "/water-storage-mistakes",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
      category: "Preparedness"
    },
    {
      title: "Atmospheric Water Generators vs Traditional Storage: The Math",
      excerpt: "Compare costs, benefits, and real-world scenarios. Data-driven analysis of different water security approaches.",
      path: "/awg-vs-traditional",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
      category: "Technology"
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="relative overflow-hidden bg-gradient-to-br from-mystic-jade via-ocean-blue to-mystic-jade-700 text-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4 mr-2 text-coral-accent" />
              <span className="text-sm font-semibold">Expert-Researched Information</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Understand the Water Crisis and Protect Your Family
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Water scarcity and contamination are no longer distant problems. This resource provides data-driven research on the threats, preparation strategies, and available solutions.
            </p>

            <button
              onClick={() => navigate('/water-contamination')}
              className="inline-flex items-center justify-center bg-white text-mystic-jade px-8 py-4 rounded-full font-bold shadow-modern-lg hover:shadow-modern-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
            >
              Start with the Threats
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-modern">
                <Icon className="h-10 sm:h-12 w-10 sm:w-12 mx-auto mb-3 sm:mb-4 text-mystic-jade" />
                <div className="text-3xl sm:text-4xl font-bold text-charcoal mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal mb-4 sm:mb-6">
            Three Pillars of Water Security
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Awareness, preparation, and informed decision-making are key to protecting your family from water emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg sm:rounded-2xl p-6 sm:p-8 shadow-modern hover:shadow-modern-lg transition-all duration-300">
                <Icon className="h-10 sm:h-12 w-10 sm:w-12 mb-4 text-mystic-jade" />
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">{feature.description}</p>
                <button
                  onClick={() => navigate(feature.link.path)}
                  className="text-mystic-jade font-semibold flex items-center hover:gap-3 transition-all text-sm sm:text-base"
                >
                  {feature.link.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal mb-3 sm:mb-4">
              Essential Guides
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">Expert research on water security, contamination risks, and preparedness strategies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {recentArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => navigate(article.path)}
              >
                <div className="relative overflow-hidden h-40 sm:h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-mystic-jade">
                    {article.category}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-charcoal mb-2 sm:mb-3 group-hover:text-mystic-jade transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">{article.readTime}</span>
                    <ArrowRight className="h-4 w-4 text-mystic-jade group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-mystic-jade-50 to-ocean-blue/10 rounded-lg sm:rounded-2xl p-8 sm:p-12 text-center border border-mystic-jade-200">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal mb-4">
            Get Expert Water Security Insights
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to receive research updates, emergency preparedness tips, and expert analysis on water security solutions.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-mystic-jade-200 focus:border-mystic-jade focus:outline-none text-charcoal text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="bg-mystic-jade hover:bg-mystic-jade-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold whitespace-nowrap transition-colors text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs sm:text-sm text-gray-500 mt-3">No spam, unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}
