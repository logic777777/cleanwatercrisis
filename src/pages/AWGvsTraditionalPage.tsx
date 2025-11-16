import { DollarSign, TrendingUp, Shield, Droplets, Package, Zap, CheckCircle, XCircle, Calculator, ExternalLink, ArrowRight } from 'lucide-react';
import { useRouter } from '../router';

export function AWGvsTraditionalPage() {
  const { navigate } = useRouter();

  const costComparison = [
    {
      year: "Year 1",
      traditional: "$500",
      awg: "$497",
      traditionalDetails: "Initial containers + water + rotation",
      awgDetails: "One-time Smart Water Box purchase"
    },
    {
      year: "Year 2",
      traditional: "$720",
      awg: "$527",
      traditionalDetails: "$220 rotation + new containers",
      awgDetails: "$30 filter replacement"
    },
    {
      year: "Year 3",
      traditional: "$940",
      awg: "$557",
      traditionalDetails: "$220 rotation + maintenance",
      awgDetails: "$30 filter replacement"
    },
    {
      year: "5 Years",
      traditional: "$1,600+",
      awg: "$617",
      traditionalDetails: "Ongoing costs + container replacement",
      awgDetails: "Minimal filter costs only"
    }
  ];

  const features = [
    {
      category: "Initial Investment",
      traditional: { value: "$200-500", rating: "good" },
      awg: { value: "$497", rating: "good" }
    },
    {
      category: "Ongoing Costs",
      traditional: { value: "$15-25/month", rating: "poor" },
      awg: { value: "$2-5/month", rating: "excellent" }
    },
    {
      category: "Water Capacity",
      traditional: { value: "Limited storage", rating: "poor" },
      awg: { value: "5-10 gal/day unlimited", rating: "excellent" }
    },
    {
      category: "Shelf Life",
      traditional: { value: "6-12 months", rating: "poor" },
      awg: { value: "Always fresh", rating: "excellent" }
    },
    {
      category: "Space Required",
      traditional: { value: "Large footprint", rating: "poor" },
      awg: { value: "Compact 35 lbs", rating: "excellent" }
    },
    {
      category: "Maintenance",
      traditional: { value: "Constant rotation", rating: "poor" },
      awg: { value: "5 min/week", rating: "excellent" }
    },
    {
      category: "Water Purity",
      traditional: { value: "Degrades over time", rating: "poor" },
      awg: { value: "99.9% pure always", rating: "excellent" }
    },
    {
      category: "Emergency Ready",
      traditional: { value: "Limited duration", rating: "fair" },
      awg: { value: "Unlimited with power", rating: "excellent" }
    }
  ];

  const scenarios = [
    {
      title: "The Jackson Family - 4 People",
      traditional: {
        storage: "120 gallons (30-day supply at 1 gal/person)",
        cost: "$180 initial + $20/month rotation = $420/year",
        space: "12 square feet of floor space",
        issues: "Water develops taste after 8 months, 1 container leaked"
      },
      awg: {
        storage: "Produces 8 gallons daily (240 gal/month)",
        cost: "$497 initial + $30/year filters = $527 first year",
        space: "2 square feet",
        issues: "None - fresh water daily, no storage needed"
      }
    },
    {
      title: "The Martinez Household - 2 Adults, 2 Kids, 2 Pets",
      traditional: {
        storage: "180 gallons (30-day supply at 1.5 gal/person + pets)",
        cost: "$270 initial + $30/month rotation = $630/year",
        space: "18 square feet plus pet water containers",
        issues: "Insufficient for cooking/hygiene, ran out during 2-week crisis"
      },
      awg: {
        storage: "Produces 10 gallons daily (300 gal/month)",
        cost: "$497 initial + $30/year filters = $527 first year",
        space: "2 square feet",
        issues: "None - excess capacity for all needs"
      }
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-mystic-jade/10 px-4 py-2 rounded-full mb-6">
            <Calculator className="h-5 w-5 mr-2 text-mystic-jade" />
            <span className="text-sm font-semibold text-mystic-jade">Cost-Benefit Analysis</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            Atmospheric Water Generators vs Traditional Storage: The Real Math
          </h1>
          <p className="text-xl text-gray-600">
            We break down the actual costs, benefits, and limitations of each approach to help you make an informed decision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-modern p-8">
            <div className="flex items-center mb-6">
              <Package className="h-10 w-10 text-ocean-blue mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-charcoal">Traditional Storage</h3>
                <p className="text-gray-600">Bottled water containers</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Lower upfront cost</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">No power required</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Simple to understand</span>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Limited quantity</span>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Degrades over time</span>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Constant rotation needed</span>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Large space requirement</span>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Ongoing costs add up</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-mystic-jade-50 to-ocean-blue/10 rounded-2xl shadow-modern p-8 border-2 border-mystic-jade">
            <div className="flex items-center mb-6">
              <Droplets className="h-10 w-10 text-mystic-jade mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-charcoal">Smart Water Box AWG</h3>
                <p className="text-gray-600">Atmospheric water generator</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Unlimited water production</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Always fresh, never expires</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">99.9% pure filtration</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Compact 35 lb design</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Minimal maintenance</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Solar compatible</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-success-green mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">One-time investment</span>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Requires power source</span>
              </div>
              <div className="flex items-start">
                <XCircle className="h-5 w-5 text-coral-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Less effective in dry climates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-charcoal mb-8 text-center">
            5-Year Cost Comparison
          </h2>
          <div className="bg-white rounded-2xl shadow-modern overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-mystic-jade to-ocean-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Timeframe</th>
                    <th className="px-6 py-4 text-left">Traditional Storage</th>
                    <th className="px-6 py-4 text-left">Smart Water Box</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-charcoal">{row.year}</td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-coral-accent text-lg">{row.traditional}</div>
                        <div className="text-sm text-gray-600">{row.traditionalDetails}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-success-green text-lg">{row.awg}</div>
                        <div className="text-sm text-gray-600">{row.awgDetails}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 bg-gradient-to-r from-success-green/10 to-mystic-jade-50 rounded-xl p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-success-green mr-4" />
              <div>
                <p className="font-bold text-charcoal text-lg">5-Year Savings with Smart Water Box: $983+</p>
                <p className="text-gray-600">And you get unlimited water production vs limited storage</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-charcoal mb-8 text-center">
            Feature-by-Feature Comparison
          </h2>
          <div className="bg-white rounded-2xl shadow-modern overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-charcoal text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Traditional Storage</th>
                    <th className="px-6 py-4 text-center">Smart Water Box</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-charcoal">{feature.category}</td>
                      <td className="px-6 py-4 text-center">
                        <div>{feature.traditional.value}</div>
                        <div className="mt-1">
                          {feature.traditional.rating === 'excellent' && <span className="text-success-green text-2xl">★★★</span>}
                          {feature.traditional.rating === 'good' && <span className="text-yellow-500 text-2xl">★★☆</span>}
                          {feature.traditional.rating === 'fair' && <span className="text-orange-500 text-2xl">★☆☆</span>}
                          {feature.traditional.rating === 'poor' && <span className="text-coral-accent text-2xl">☆☆☆</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="font-semibold">{feature.awg.value}</div>
                        <div className="mt-1">
                          {feature.awg.rating === 'excellent' && <span className="text-success-green text-2xl">★★★</span>}
                          {feature.awg.rating === 'good' && <span className="text-yellow-500 text-2xl">★★☆</span>}
                          {feature.awg.rating === 'fair' && <span className="text-orange-500 text-2xl">★☆☆</span>}
                          {feature.awg.rating === 'poor' && <span className="text-coral-accent text-2xl">☆☆☆</span>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-charcoal mb-8 text-center">
            Real Family Scenarios
          </h2>
          <div className="space-y-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-modern p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-6">{scenario.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 rounded-xl p-6">
                    <h4 className="font-bold text-charcoal mb-4 flex items-center">
                      <Package className="h-5 w-5 mr-2 text-coral-accent" />
                      Traditional Storage Approach
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold">Storage:</span> {scenario.traditional.storage}
                      </div>
                      <div>
                        <span className="font-semibold">Annual Cost:</span> {scenario.traditional.cost}
                      </div>
                      <div>
                        <span className="font-semibold">Space:</span> {scenario.traditional.space}
                      </div>
                      <div className="pt-2 border-t border-red-200">
                        <span className="font-semibold text-coral-accent">Issues:</span> {scenario.traditional.issues}
                      </div>
                    </div>
                  </div>
                  <div className="bg-mystic-jade-50 rounded-xl p-6">
                    <h4 className="font-bold text-charcoal mb-4 flex items-center">
                      <Droplets className="h-5 w-5 mr-2 text-mystic-jade" />
                      Smart Water Box Approach
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold">Capacity:</span> {scenario.awg.storage}
                      </div>
                      <div>
                        <span className="font-semibold">Annual Cost:</span> {scenario.awg.cost}
                      </div>
                      <div>
                        <span className="font-semibold">Space:</span> {scenario.awg.space}
                      </div>
                      <div className="pt-2 border-t border-mystic-jade-200">
                        <span className="font-semibold text-success-green">Result:</span> {scenario.awg.issues}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-mystic-jade to-ocean-blue rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The Verdict: Math Doesn't Lie
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              While traditional storage seems cheaper upfront, the Smart Water Box pays for itself in less than 2 years while providing unlimited water, zero maintenance hassles, and true emergency independence.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <DollarSign className="h-12 w-12 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">$983+</div>
                <div className="text-white/80">Saved over 5 years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Zap className="h-12 w-12 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">1,800</div>
                <div className="text-white/80">Gallons produced/year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="h-12 w-12 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-white/80">Contaminant removal</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://69ba5eq6wxht9zejehth405q04.hop.clickbank.net/?&traffic_source=website&traffic_type=article_comparison"
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center justify-center bg-coral-accent hover:bg-coral-accent/90 text-white px-8 py-4 rounded-full font-bold shadow-modern-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Smart Water Box - Save $200
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <button
                onClick={() => navigate('/review')}
                className="inline-flex items-center justify-center bg-white text-mystic-jade px-8 py-4 rounded-full font-bold shadow-modern hover:shadow-modern-lg transform hover:scale-105 transition-all duration-300"
              >
                Read Detailed Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <p className="mt-6 text-white/80">
              60-Day Money-Back Guarantee • 2-Year Warranty • Free Shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
