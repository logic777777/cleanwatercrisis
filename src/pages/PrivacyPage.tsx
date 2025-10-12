import { Shield, Lock, Eye, Database, Globe, Mail, FileText, AlertCircle, CheckCircle } from 'lucide-react';

export function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, contact details)",
        "Usage data and analytics (pages visited, time spent, click patterns)",
        "Device information (IP address, browser type, operating system)",
        "Cookies and tracking technologies for site functionality"
      ]
    },
    {
      icon: Shield,
      title: "How We Protect Your Data",
      content: [
        "SSL encryption for all data transmission",
        "Secure servers with regular security audits",
        "Limited access to personal information (need-to-know basis)",
        "Regular security updates and monitoring"
      ]
    },
    {
      icon: Globe,
      title: "Third-Party Services",
      content: [
        "ClickBank for secure payment processing",
        "Google Analytics for website improvement",
        "Email service providers for newsletter delivery",
        "Social media platforms for content sharing"
      ]
    },
    {
      icon: Eye,
      title: "Your Rights",
      content: [
        "Access your personal data upon request",
        "Correct inaccurate information",
        "Request deletion of your data",
        "Opt-out of marketing communications",
        "Data portability rights under GDPR/CCPA"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-mystic-jade to-ocean-blue rounded-full mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-modern p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            At CleanWaterCrisis.online ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not access our website or use our services.
          </p>
        </div>

        {/* Main Sections */}
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-mystic-jade-50 to-white rounded-2xl shadow-modern p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-mystic-jade rounded-full mr-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-charcoal">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* Cookies Section */}
        <div className="bg-white rounded-2xl shadow-modern p-8 mb-8">
          <h2 className="text-2xl font-display font-bold text-charcoal mb-6 flex items-center">
            <Lock className="h-6 w-6 mr-3 text-mystic-jade" />
            Cookie Policy
          </h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-mystic-jade mr-2">•</span>
              <span className="text-gray-700">Remember your preferences and settings</span>
            </li>
            <li className="flex items-start">
              <span className="text-mystic-jade mr-2">•</span>
              <span className="text-gray-700">Analyze site traffic and usage patterns</span>
            </li>
            <li className="flex items-start">
              <span className="text-mystic-jade mr-2">•</span>
              <span className="text-gray-700">Personalize content and advertisements</span>
            </li>
            <li className="flex items-start">
              <span className="text-mystic-jade mr-2">•</span>
              <span className="text-gray-700">Improve site functionality and user experience</span>
            </li>
          </ul>
          <p className="text-gray-700">
            You can control cookie settings through your browser preferences. However, disabling cookies may limit certain features of our website.
          </p>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-gradient-to-br from-coral-accent/10 to-white rounded-2xl shadow-modern p-8 mb-8">
          <h2 className="text-2xl font-display font-bold text-charcoal mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 mr-3 text-coral-accent" />
            Affiliate Disclosure
          </h2>
          <p className="text-gray-700 mb-4">
            CleanWaterCrisis.online participates in affiliate marketing programs, including the ClickBank affiliate program. This means we may earn commissions from qualifying purchases made through links on our website.
          </p>
          <p className="text-gray-700">
            When you click on affiliate links and make a purchase, the third-party vendor may collect information as outlined in their privacy policy. We recommend reviewing the privacy policies of any third-party sites you visit.
          </p>
        </div>

        {/* GDPR/CCPA Compliance */}
        <div className="bg-white rounded-2xl shadow-modern p-8 mb-8">
          <h2 className="text-2xl font-display font-bold text-charcoal mb-6">
            GDPR & CCPA Compliance
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-charcoal mb-2">For European Union Residents (GDPR):</h3>
              <p className="text-gray-700">
                Under the General Data Protection Regulation, you have the right to access, rectify, port, and erase your personal data. You may also object to processing and request restriction of processing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">For California Residents (CCPA):</h3>
              <p className="text-gray-700">
                The California Consumer Privacy Act provides you with rights regarding your personal information, including the right to know, delete, opt-out, and non-discrimination.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-mystic-jade to-ocean-blue rounded-2xl shadow-modern p-8 text-white">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center">
            <Mail className="h-6 w-6 mr-3" />
            Contact Us About Privacy
          </h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2">
            <p>Email: privacy@cleanwatercrisis.online</p>
            <p>Website: cleanwatercrisis.online/contact</p>
            <p>Response Time: Within 48 business hours</p>
          </div>
        </div>

        {/* Updates Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
          </p>
        </div>
      </div>
    </div>
  );
}
