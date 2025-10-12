import React from 'react';
import { ArrowRight, Shield, Droplets, AlertTriangle } from 'lucide-react';
import { useRouter } from '../router';

export function HomePage() {
  const { navigate } = useRouter();

  const features = [
    {
      icon: AlertTriangle,
      title: "Crisis Awareness",
      description: "Stay informed about global water scarcity with data-driven insights",
      color: "text-coral-accent"
    },
    {
      icon: Shield,
      title: "Emergency Ready",
      description: "Practical strategies to secure clean water during any disaster",
      color: "text-ocean-blue"
    },
    {
      icon: Droplets,
      title: "Smart Solutions",
      description: "Cutting-edge atmospheric water generation technology reviewed",
      color: "text-success-green"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your content for the HomePage will go here */}
        <h1 className="text-4xl text-center font-bold">Welcome to the Clean Water Crisis Resource</h1>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 bg-white rounded-lg shadow-modern">
                <Icon className={`h-8 w-8 ${feature.color}`} />
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <button onClick={() => navigate('/review')} className="btn-primary">
                Read Our Smart Water Box Review <ArrowRight className="inline ml-2" />
            </button>
        </div>
      </div>
    </div>
  );
}