import { AlertTriangle, XCircle, CheckCircle, Droplets, Shield, Clock, TrendingDown, ExternalLink, ArrowRight } from 'lucide-react';
import { useRouter } from '../router';

export function WaterStorageMistakesPage() {
  const { navigate } = useRouter();

  const mistakes = [
    {
      number: "1",
      title: "Storing Water in the Wrong Containers",
      problem: "Using containers that weren't designed for water storage leads to chemical leaching and bacterial growth.",
      consequences: [
        "BPA and other chemicals contaminate your water supply",
        "Containers degrade over time, causing leaks",
        "Bacteria thrives in non-food-grade plastic"
      ],
      solution: "Use only food-grade, BPA-free containers specifically designed for long-term water storage. Better yet, consider an atmospheric water generator that produces fresh water on demand.",
      icon: Droplets
    },
    {
      number: "2",
      title: "Ignoring Expiration and Rotation",
      problem: "Most people store water and forget about it. Stored water has a shelf life of 6-12 months before quality degrades.",
      consequences: [
        "Water develops off-tastes and odors",
        "Contaminants multiply over time",
        "You discover unusable water during an emergency"
      ],
      solution: "Create a strict rotation schedule, or eliminate the problem entirely with a Smart Water Box that produces fresh water continuously.",
      icon: Clock
    },
    {
      number: "3",
      title: "Underestimating How Much Water You Need",
      problem: "The standard recommendation of 1 gallon per person per day is bare minimum for drinking only.",
      consequences: [
        "No water for cooking, cleaning, or hygiene",
        "Medical needs require additional water",
        "Hot weather or illness increases requirements"
      ],
      solution: "Realistic need is 2-3 gallons per person daily. For a family of 4, that's 240-360 gallons for a month - nearly impossible to store but easy to generate.",
      icon: TrendingDown
    },
    {
      number: "4",
      title: "Poor Storage Conditions",
      problem: "Storing water in garages, sheds, or areas with temperature fluctuations degrades water quality rapidly.",
      consequences: [
        "Heat accelerates chemical leaching from containers",
        "Temperature swings promote bacterial growth",
        "Sunlight exposure breaks down container integrity"
      ],
      solution: "Store in cool, dark, stable environments. Or skip storage entirely with an AWG that produces water anywhere, anytime.",
      icon: AlertTriangle
    },
    {
      number: "5",
      title: "No Backup Plan When Storage Fails",
      problem: "Relying solely on stored water with no alternative source is a single point of failure.",
      consequences: [
        "Contamination ruins entire supply at once",
        "Disaster damage destroys stored containers",
        "Running out means complete water loss"
      ],
      solution: "Have a redundant system. The Smart Water Box provides unlimited water production, making it the ultimate backup to any storage system.",
      icon: Shield
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-coral-accent/10 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-5 w-5 mr-2 text-coral-accent" />
            <span className="text-sm font-semibold text-coral-accent">Critical Emergency Preparedness</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            5 Critical Mistakes People Make Storing Emergency Water
          </h1>
          <p className="text-xl text-gray-600">
            These common errors could leave your family without safe drinking water when you need it most
          </p>
        </div>

        <div className="bg-gradient-to-br from-coral-accent/5 to-red-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start">
            <AlertTriangle className="h-8 w-8 text-coral-accent mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                The Harsh Reality
              </h3>
              <p className="text-gray-700 mb-4">
                According to FEMA, over 60% of American families have less than 3 days of water stored. Even worse, most of that stored water is improperly maintained and potentially unsafe to drink. During the 2021 Texas winter storm, countless families discovered their stored water was frozen, contaminated, or simply insufficient.
              </p>
              <p className="text-gray-700">
                Don't let your family become a statistic. Understanding these mistakes could save lives.
              </p>
            </div>
          </div>
        </div>

        {mistakes.map((mistake, index) => {
          const Icon = mistake.icon;
          return (
            <div key={index} className="mb-12">
              <div className="bg-white rounded-2xl shadow-modern p-8">
                <div className="flex items-start mb-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-coral-accent text-white rounded-full font-bold text-2xl mr-4 flex-shrink-0">
                    {mistake.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-charcoal mb-3">
                      {mistake.title}
                    </h2>
                    <div className="flex items-start">
                      <Icon className="h-6 w-6 text-mystic-jade mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700 text-lg">{mistake.problem}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                    <XCircle className="h-5 w-5 text-coral-accent mr-2" />
                    What Can Go Wrong:
                  </h4>
                  <ul className="space-y-2">
                    {mistake.consequences.map((consequence, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-coral-accent mr-2 mt-1">•</span>
                        <span className="text-gray-700">{consequence}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-mystic-jade-50 rounded-xl p-6">
                  <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-success-green mr-2" />
                    The Better Approach:
                  </h4>
                  <p className="text-gray-700">{mistake.solution}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bg-gradient-to-br from-mystic-jade to-ocean-blue rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The Solution: Stop Storing, Start Generating
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              The Smart Water Box eliminates all five of these mistakes by producing fresh, pure water on demand from the air around you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <CheckCircle className="h-10 w-10 mx-auto mb-3" />
                <h4 className="font-bold mb-2">No Containers Needed</h4>
                <p className="text-sm text-white/80">Fresh water produced directly</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <CheckCircle className="h-10 w-10 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Always Fresh</h4>
                <p className="text-sm text-white/80">No rotation or expiration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <CheckCircle className="h-10 w-10 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Unlimited Supply</h4>
                <p className="text-sm text-white/80">5-10 gallons produced daily</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://69ba5eq6wxht9zejehth405q04.hop.clickbank.net/?&traffic_source=website&traffic_type=article_mistakes"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center bg-coral-accent hover:bg-coral-accent/90 text-white px-8 py-4 rounded-full font-bold shadow-modern-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Smart Water Box Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <button
                onClick={() => navigate('/review')}
                className="inline-flex items-center justify-center bg-white text-mystic-jade px-8 py-4 rounded-full font-bold shadow-modern hover:shadow-modern-lg transform hover:scale-105 transition-all duration-300"
              >
                Read Full Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <p className="mt-6 text-white/80">
              60-Day Money-Back Guarantee • 2-Year Warranty • Free Shipping
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-modern p-8">
          <h3 className="text-2xl font-display font-bold text-charcoal mb-6">
            The Bottom Line
          </h3>
          <p className="text-gray-700 mb-4">
            Traditional water storage is better than nothing, but it's fraught with challenges that most families aren't prepared to handle. From container selection to rotation schedules, there are too many ways for your emergency water supply to fail when you need it most.
          </p>
          <p className="text-gray-700 mb-4">
            The Smart Water Box represents a paradigm shift in emergency water preparedness. Instead of storing finite quantities of water that degrade over time, you're investing in the ability to produce unlimited fresh, pure water on demand.
          </p>
          <p className="text-gray-700">
            For families serious about water security, atmospheric water generation isn't just an option—it's the future of emergency preparedness.
          </p>
        </div>
      </div>
    </div>
  );
}
