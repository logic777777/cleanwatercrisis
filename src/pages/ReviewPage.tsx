import React, { useState } from 'react';
import { Star, CheckCircle, XCircle, Shield, Droplets, Battery, Wind, ThermometerSun, Package, Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export function ReviewPage() {
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
    { icon: Battery, text: "Requires power source (solar panel sold separately)" }
  ];

  const faqs = [
    {
      question: "How much water can the Smart Water Box really produce?",
      answer: "The Smart Water Box can produce between 5-10 gallons per day depending on humidity levels. In optimal conditions (60-80% humidity), it consistently produces 8-10 gallons."
    },
    {
      question: "Does it work during power outages?",
      answer: "Yes, with the solar panel accessory. The Smart Water Box can operate completely off-grid using the optional 100W solar panel kit. It also has a built-in battery that provides up to 12 hours of operation."
    },
    {
      question: "What's the warranty and return policy?",
      answer: "The Smart Water Box comes with a 60-day money-back guarantee and a 2-year manufacturer warranty. If you're not satisfied, you can return it within 60 days for a full refund (minus shipping)."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            Smart Water Box Review
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An in-depth, unbiased review of the atmospheric water generator.
          </p>
        </div>

        {/* Product Image and CTA */}
        <div className="text-center mb-12">
            <a 
                href="https://69ba5eq6wxht9zejehth405q04.hop.clickbank.net/?&traffic_source=website&traffic_type=blog"
                target="_blank"
                rel="nofollow noopener"
                className="btn-primary"
            >
                Get Your Smart Water Box Now
                <ExternalLink className="ml-2 h-5 w-5 inline" />
            </a>
            <p className="text-sm text-gray-500 mt-4">
                🔒 60-Day Money-Back Guarantee • 2-Year Warranty
            </p>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
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
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
              <XCircle className="h-8 w-8 text-coral-accent mr-3" />
              Cons
            </h3>
            <ul className="space-y-4">
              {cons.map((con, index) => {
                const Icon = con.icon;
                return (
                  <li key={index} className="flex items-start">
                    <Icon className="h-6 w-6 text-coral-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{con.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-charcoal mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-white p-6 text-left"
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
                  <div className="p-6 bg-gray-50 text-gray-700">
                    <p>{faq.answer}</p>
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