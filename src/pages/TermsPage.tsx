import React from 'react';
import { FileText, Scale, AlertTriangle, Shield, Ban, DollarSign, Globe, Gavel, CheckCircle, XCircle } from 'lucide-react';

export function TermsPage() {
  const terms = [
    {
      icon: Scale,
      title: "Acceptance of Terms",
      content: "By accessing and using CleanWaterCrisis.online, you accept and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
    },
    {
      icon: Globe,
      title: "Use License",
      content: "Permission is granted to temporarily view and use the materials on CleanWaterCrisis.online for personal, non-commercial use only. This is a grant of a license, not a transfer of title. You may not modify, copy, distribute, transmit, display, reproduce, or create derivative works from our content without express written permission."
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: "The materials on CleanWaterCrisis.online are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property."
    },
    {
      icon: Shield,
      title: "Limitations of Liability",
      content: "In no event shall CleanWaterCrisis.online or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use materials on our website, even if we have been notified of the possibility of such damage."
    },
    {
      icon: DollarSign,
      title: "Affiliate & Product Disclaimers",
      content: "This website contains affiliate links to products. We may receive a commission for purchases made through these links. Product reviews and recommendations are based on our research and experience, but individual results may vary. Always conduct your own research before making purchase decisions."
    },
    {
      icon: Gavel,
      title: "Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
    }
  ];

  const prohibitedUses = [
    "Using the site for any unlawful purpose or to solicit others to perform unlawful acts",
    "Violating any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
    "Infringing upon or violating our intellectual property rights or the intellectual property rights of others",
    "Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discriminating",
    "Submitting false or misleading information",
    "Uploading or transmitting viruses or any other type of malicious code",
    "Collecting or tracking personal information of others without consent",
    "Spamming, phishing, pharming, pretexting, spidering, crawling, or scraping",
    "Using the site for any obscene or immoral purpose",
    "Interfering with or circumventing the security features of the site"
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-mystic-jade to-ocean-blue rounded-full mb-6">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-modern p-8 mb-8">
          <h2 className="text-2xl font-display font-bold text-charcoal mb-4">
            Agreement to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to CleanWaterCrisis.online. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of the new Terms.
          </p>
        </div>

        {/* Main Terms Sections */}
        {terms.map((term, index) => {
          const Icon = term.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-mystic-jade-50 to-white rounded-2xl shadow-modern p-8 mb-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-mystic-jade rounded-full mr-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-charcoal">
                  {term.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {term.content}
              </p>
            </div>
          );
        })}

        {/* Prohibited Uses */}
        <div className="bg-gradient-to-br from-coral-accent/10 to-white rounded-2xl shadow-modern p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 