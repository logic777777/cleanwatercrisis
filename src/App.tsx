import { RouterProvider } from './router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ReviewPage } from './pages/ReviewPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { WaterStorageMistakesPage } from './pages/WaterStorageMistakesPage';
import { AWGvsTraditionalPage } from './pages/AWGvsTraditionalPage';
import { WaterContaminationPage } from './pages/WaterContaminationPage';
import { useRouter } from './router';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/review':
        return <ReviewPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/water-storage-mistakes':
        return <WaterStorageMistakesPage />;
      case '/awg-vs-traditional':
        return <AWGvsTraditionalPage />;
      case '/water-contamination':
        return <WaterContaminationPage />;

      case '/water-crisis':
      case '/emergency-water':
      case '/smart-water-vs-storage':
      case '/diy-vs-smart-water':
      case '/atmospheric-water':
      case '/contact':
        return <ComingSoonPage />;

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
