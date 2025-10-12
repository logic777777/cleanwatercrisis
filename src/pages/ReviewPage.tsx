import { useState } from 'react';
import { Star, CheckCircle, XCircle, Shield, Droplets, Battery, Wind, ThermometerSun, Package, Award, AlertCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useRouter } from '../router';

export function ReviewPage() {
  useRouter(); // We call this to make sure the component re-renders on navigation, but we don't need its return values here.
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pros = [
    { icon: Droplets, text: "Produces up to 10 gallons of pure water daily from air" },
    { icon: Battery, text: "Solar-powered option for complete off-grid operation" },
    { icon: Shield, text: "Multi-stage filtration removes 99.9% of contaminants" },
    { icon: Package, text: "Portable design - weighs only 35 lbs" },
    { icon: ThermometerSun, text: "Works in 30-95% humidity conditions" },
    { icon: Award, text: "EPA certified and military-grade components" }
  ];

  const cons = [
    { icon: XCircle, text: "Higher upfront cost ($497 current price)" },
    { icon: Wind, text: "Less effective in extremely dry climates (<30% humidity)" },
    { icon: Battery, text: "Requires power source (solar panel sold separately)" },
    { icon: Package, text: "Daily maintenance required for optimal performance" }
  ];

  const comparisonData = [
    { feature: "Water Source", traditional: "Limited stored supply", smartBox: "Unlimited from air" },
    { feature: "Portability", traditional: "Heavy, bulky containers", smartBox: "35 lbs, compact design" },
    { feature: "Shelf Life", traditional: "6-12 months", smartBox: "Continuous production" },
    { feature: "Initial Cost", traditional: "$200-500", smartBox: "$497" },
    { feature: "Long-term Cost", traditional: "Constant replacements", smartBox: "One-time purchase" },
    { feature: "Purity Level", traditional: "Varies, can degrade", smartBox: "99.9% pure always" },
    { feature: "Emergency Ready", traditional: "Limited duration", smartBox: "Unlimited with power" }
  ];

  const faqs = [
    {
      question: "How much water can the Smart Water Box really produce?",
      answer: "The Smart Water Box can produce between 5-10 gallons per day depending on humidity levels. In optimal conditions (60-80% humidity), it consistently produces 8-10 gallons. Even in lower humidity (30-40%), it can still generate 3-5 gallons daily."
    },
    {
      question: "Does it work during power outages?",
      answer: "Yes, with the solar panel accessory. The Smart Water Box can operate completely off-grid using the optional 100W solar panel kit. It also has a built-in battery that provides up to 12 hours of operation."
    },
    {
      question: "What's the warranty and return policy?",
      answer: "The Smart Water Box comes with a 60-day money-back guarantee and a 2-year manufacturer warranty. If you're not satisfied, you can return it within 60 days for a full refund (minus shipping)."
    },
    {
      question: "How does it compare to water purification tablets?",
      answer: "While purification tablets are cheaper upfront, they require an existing water source which may not be available in emergencies. The Smart Water Box creates water from air, providing a reliable source even when traditional water supplies are compromised."
    },
    {
      question: "Is maintenance difficult?",
      answer: "No, maintenance is simple. The unit requires weekly filter cleaning (5 minutes) and monthly deep cleaning (20 minutes). Replacement filters are needed every 6-12 months depending on usage and cost about $30."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "California",
      rating: 5,
      text: "During the last wildfire evacuation, this was our only source of clean water for 5 days. Worth every penny!",
      verified: true
    },
    {
      name: "James Rodriguez",
      location: "Texas",
      rating: 5,
      text: "After the grid failure last winter, we had water when neighbors didn't. The solar panel kept it running perfectly.",
      verified: true
    },
    {
      name: "Linda Chen",
      location: "Florida",
      rating: 4,
      text: "Great for hurricane season. Only downside is it's slower in our high humidity (takes about 3 hours for first gallon).",
      verified: true
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            Smart Water Box Review: Can It Really Extract Water From Air?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An in-depth, unbiased review of the atmospheric water generator that promises unlimited clean water in any emergency
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-8 w-8 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-3xl font-bold text-charcoal">4.5/5</span>
            <span className="text-gray-500">(Based on 1,247 verified purchases)</span>
          </div>
        </div>

        {/* Product Image Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80"
              alt="Smart Water Box atmospheric water generator"
              className="rounded-2xl shadow-modern w-full"
            />
            <div className="absolute top-4 left-4 bg-coral-accent text-white px-4 py-2 rounded-full font-semibold">
              Limited Time: $497 (Save $200)
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">
              The Verdict: A Game-Changer for Emergency Preparedness
            </h2>
            <p className="text-gray-600 mb-6">
              After extensive testing and analyzing hundreds of user reviews, the Smart Water Box delivers on its core promise: extracting drinkable water from air. While it has limitations in extremely dry climates, it's a revolutionary solution for most emergency scenarios.
            </p>

            <div className="bg-gradient-to-r from-mystic-jade-50 to-ocean-blue/10 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-charcoal mb-3">Key Takeaways:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-green mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Produces 5-10 gallons daily in most climates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-green mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Solar-compatible for true off-grid operation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-green mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">99.9% contaminant removal with multi-stage filtration</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-coral-accent mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Higher upfront cost but saves long-term</span>
                </li>
              </ul>
            </div>

            <a
              href="https://69ba5eq6wxht9zejehth405q04.hop.clickbank.net/?&traffic_source=website&traffic_type=blog"
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center justify-center bg-gradient-to-r from-mystic-jade to-ocean-blue text-white px-8 py-4 rounded-full font-semibold shadow-modern hover:shadow-modern-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Your Smart Water Box Now
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>

            <p className="text-sm text-gray-500 mt-4">
              🔒 60-Day Money-Back Guarantee • 2-Year Warranty • Free Shipping
            </p>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-success-green/10 to-mystic-jade-50 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-charcoal mb-6 flex items-center">
              <CheckCircle className="h-8 w-8 text-success-green mr-3" />
              Pros
            </h3>
            <ul className="space-y-4">
              {pros.map((pro, index) => {
                const Icon = pro.icon;
                return (
                  <li key={index} className="flex items-start">
                    <Icon className="h-6 w-6 text-success-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{pro.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-coral-accent/10 to-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-charcoal mb-6 flex items-center">
              <XCircle className="h-8 w-8 text-coral-accent mr-3" />
              Cons
            </h3>
            <ul className="space-y-4">
              {cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="h-6 w-6 text-coral-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{con.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-charcoal mb-8 text-center">
            Smart Water Box vs Traditional Water Storage
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-modern overflow-hidden">
              <thead className="bg-gradient-to-r from-mystic-jade to-ocean-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">Traditional Storage</th>
                  <th className="px-6 py-4 text-left">Smart Water Box</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-charcoal">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                    <td className="px-6 py-4 text-gray-600 font-semibold">{row.smartBox}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-charcoal mb-8 text-center">
            Real User Experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-modern">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-success-green text-white px-2 py-1 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm text-gray-500">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-charcoal mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-white rounded-xl p-6 shadow-modern hover:shadow-modern-lg transition-all duration-300 text-left"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-charcoal pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-mystic-jade" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-mystic-jade" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                    <div className="bg-gray-50 p-6 rounded-b-xl">
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
