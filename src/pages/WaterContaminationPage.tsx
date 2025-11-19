import { AlertTriangle, Droplets, Shield, TrendingUp, Bug, Zap, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';
import { useRouter } from '../router';

export function WaterContaminationPage() {
  const { navigate } = useRouter();

  const contaminants = [
    {
      name: "PFAS (Forever Chemicals)",
      icon: Zap,
      risk: "CRITICAL",
      description: "Perfluoroalkyl and polyfluoroalkyl substances",
      affectedPeople: "200+ million Americans",
      sources: [
        "Industrial manufacturing runoff",
        "Fire-fighting foam residue at airports",
        "Non-stick cookware manufacturing",
        "Food packaging materials"
      ],
      effects: "Kidney disease, liver damage, thyroid dysfunction, reproductive issues",
      filterInfo: "Basic filters CANNOT remove PFAS. Requires activated carbon or reverse osmosis."
    },
    {
      name: "Microplastics",
      icon: Droplets,
      risk: "HIGH",
      description: "Tiny plastic particles from broken-down plastic waste",
      affectedPeople: "Most municipal water supplies",
      sources: [
        "Plastic bottle and bag degradation",
        "Synthetic textile washing",
        "Tire wear and road debris",
        "Plastic food packaging breakdown"
      ],
      effects: "Lodges in digestive system, organ damage, inflammation",
      filterInfo: "Multi-stage filtration with particle filters can reduce microplastics significantly."
    },
    {
      name: "Lead",
      icon: AlertTriangle,
      risk: "CRITICAL",
      description: "Toxic heavy metal from old pipes and solder",
      affectedPeople: "18 million Americans (especially children under 6)",
      sources: [
        "Pre-1986 copper pipes with lead solder",
        "Old water infrastructure in cities",
        "Lead service lines to homes",
        "Industrial contamination"
      ],
      effects: "Developmental delays in children, learning disabilities, hypertension, kidney damage",
      filterInfo: "Lead requires certified filters (NSF 53). AWG systems extract water directly from air, bypassing pipe contamination."
    },
    {
      name: "Fluoride (Excess)",
      icon: Shield,
      risk: "MEDIUM",
      description: "Over-fluoridation in some water systems",
      affectedPeople: "Varies by region, 25+ states affected",
      sources: [
        "Municipal water fluoridation over-dosing",
        "Natural fluoride deposits in groundwater",
        "Industrial runoff",
        "Toothpaste and mouth rinse residue"
      ],
      effects: "Dental fluorosis (brown spots), skeletal fluorosis, thyroid issues, neurological concerns in children",
      filterInfo: "Requires reverse osmosis or specialized bone char filters. AWG naturally produces fluoride-free water."
    },
    {
      name: "Coliform Bacteria",
      icon: Bug,
      risk: "CRITICAL",
      description: "E. coli and fecal indicator bacteria",
      affectedPeople: "Vulnerable populations in rural/aging infrastructure areas",
      sources: [
        "Raw sewage infiltration in pipes",
        "Aging water treatment systems",
        "Boil water notice violations",
        "Cross-contamination during repairs"
      ],
      effects: "Severe gastrointestinal illness, dehydration, kidney failure, death in vulnerable populations",
      filterInfo: "Requires UV treatment or boiling plus multi-stage filtration. AWG uses multi-stage filtration and UV treatment."
    },
    {
      name: "Nitrates",
      icon: TrendingUp,
      risk: "HIGH",
      description: "Nitrogen compounds from agricultural runoff",
      affectedPeople: "2 million Americans rely on contaminated wells",
      sources: [
        "Synthetic fertilizer agricultural runoff",
        "Livestock waste",
        "Industrial discharge",
        "Septic system leakage"
      ],
      effects: "Methemoglobinemia (blue baby syndrome) in infants, cancer risk, thyroid issues",
      filterInfo: "Difficult to remove with basic filters. Ion exchange or reverse osmosis needed."
    }
  ];

  const stats = [
    { number: "2.2B", label: "People globally without clean water" },
    { number: "774M", label: "People without basic water service" },
    { number: "200M+", label: "Americans with PFAS-contaminated water" },
    { number: "18M", label: "Americans at risk from lead exposure" }
  ];

  return (
    <div className="pt-16 sm:pt-24 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-coral-accent/10 px-4 py-2 rounded-full mb-4 sm:mb-6">
            <AlertTriangle className="h-5 w-5 mr-2 text-coral-accent" />
            <span className="text-sm font-semibold text-coral-accent">Public Health Alert</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-charcoal mb-3 sm:mb-6">
            Hidden Water Contamination: The Threats Your Filter Can't Stop
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-2">
            What your municipal water system isn't telling you about the contaminants in your drinking water
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-modern text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-mystic-jade mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-coral-accent/5 to-red-50 rounded-lg sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-coral-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2">
                The Problem Is Worse Than You Think
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3">
                Water treatment facilities are designed to catch some contaminants, but they're fighting a losing battle. New synthetic chemicals are entering our water supply faster than scientists can study their effects. Meanwhile, aging infrastructure means old pipes are adding their own contamination layers.
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                Standard home filters catch some particles but miss the most dangerous threats—PFAS chemicals, dissolved metals, and microscopic organisms pass right through.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal mb-6 sm:mb-8">
            The 6 Most Dangerous Contaminants
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {contaminants.map((contaminant, index) => {
              const Icon = contaminant.icon;
              return (
                <div key={index} className="bg-white rounded-lg sm:rounded-2xl shadow-modern overflow-hidden">
                  <div className="bg-gradient-to-r from-mystic-jade-50 to-ocean-blue/10 p-4 sm:p-6 border-l-4 border-mystic-jade">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-mystic-jade mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-charcoal">{contaminant.name}</h3>
                          <p className="text-sm text-gray-600">{contaminant.description}</p>
                        </div>
                      </div>
                      <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap flex-shrink-0 ${
                        contaminant.risk === 'CRITICAL' ? 'bg-coral-accent/20 text-coral-accent' :
                        contaminant.risk === 'HIGH' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {contaminant.risk} RISK
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-4">
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-charcoal mb-2">Affects: {contaminant.affectedPeople}</p>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">
                        <span className="font-semibold">Sources:</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {contaminant.sources.map((source, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-coral-accent mt-1 flex-shrink-0">•</span>
                            <span className="text-xs sm:text-sm text-gray-700">{source}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-xs sm:text-sm font-semibold text-charcoal mb-1">Health Effects:</p>
                      <p className="text-xs sm:text-sm text-gray-700 mb-3">{contaminant.effects}</p>
                    </div>

                    <div className="bg-mystic-jade-50 rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm font-semibold text-charcoal mb-1">Filter Reality:</p>
                      <p className="text-xs sm:text-sm text-gray-700">{contaminant.filterInfo}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-mystic-jade to-ocean-blue rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white mt-12 sm:mt-16 mb-12 sm:mb-16">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4">
              The Real Solution: Water From Scratch
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Atmospheric water generation doesn't filter contaminated water—it creates pure water directly from air, bypassing all sources of contamination completely.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 text-success-green" />
                <h4 className="font-bold mb-2 text-sm sm:text-base">99.9% Pure</h4>
                <p className="text-xs sm:text-sm text-white/80">No contamination source</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 text-success-green" />
                <h4 className="font-bold mb-2 text-sm sm:text-base">No Pipes</h4>
                <p className="text-xs sm:text-sm text-white/80">Never touches infrastructure</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 text-success-green" />
                <h4 className="font-bold mb-2 text-sm sm:text-base">Always Fresh</h4>
                <p className="text-xs sm:text-sm text-white/80">Produced on demand</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://69ba5eq6wxht9zejehth405q04.hop.clickbank.net/?&traffic_source=website&traffic_type=article_contamination"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center bg-coral-accent hover:bg-coral-accent/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-modern-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Get Pure Water Guarantee
                <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <button
                onClick={() => navigate('/review')}
                className="inline-flex items-center justify-center bg-white text-mystic-jade px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-modern hover:shadow-modern-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                See Full Review
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/80">
              60-Day Money-Back Guarantee • 2-Year Warranty • Free Shipping
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg sm:rounded-2xl shadow-modern p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-charcoal mb-4">
            What You Can Do Right Now
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-green mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-charcoal text-sm sm:text-base">Test Your Water</p>
                <p className="text-xs sm:text-sm text-gray-600">Get a professional water quality test. Most contaminants are invisible and tasteless.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-green mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-charcoal text-sm sm:text-base">Upgrade Your Filtration</p>
                <p className="text-xs sm:text-sm text-gray-600">If you can't get an AWG, use NSF-certified filters (53 and 58 standards minimum).</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-green mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-charcoal text-sm sm:text-base">Consider AWG Technology</p>
                <p className="text-xs sm:text-sm text-gray-600">Smart Water Box provides the ultimate solution—pure water generated from air itself.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
