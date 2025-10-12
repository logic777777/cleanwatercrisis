import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import { useRouter } from '../router';

export function ComingSoonPage() {
  const { navigate } = useRouter();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Construction className="mx-auto h-24 w-24 text-mystic-jade mb-8" />
        <h1 className="text-5xl font-display font-bold text-charcoal mb-6">
          Coming Soon!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          This section of the website is currently under construction. We are working hard to bring you more great content. Please check back later!
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
}