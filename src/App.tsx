import React from 'react';
import { RouterProvider } from './router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ReviewPage } from './pages/ReviewPage';
import { WaterCrisisPage } from './pages/WaterCrisisPage';
import { EmergencyWaterPage } from './pages/EmergencyWaterPage';
import { SmartWaterVsStoragePage } from './pages/SmartWaterVsStoragePage';
import { DIYVsSmartWaterPage } from './pages/DIYVsSmartWaterPage';
import { AtmosphericWaterPage } from './pages/AtmosphericWaterPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { useRouter } from './router';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/review':
        return <ReviewPage />;
      case '/water-crisis':
        return <WaterCrisisPage />;
      case '/emergency-water':
        return <EmergencyWaterPage />;
      case '/smart-water-vs-storage':
        return <SmartWaterVsStoragePage />;
      case '/diy-vs-smart-water':
        return <DIYVsSmartWaterPage />;
      case '/atmospheric-water':
        return <AtmosphericWaterPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pale-white via-white to-mystic-jade-50">
      <Navigation />
      <main className="animate-fade-in">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;