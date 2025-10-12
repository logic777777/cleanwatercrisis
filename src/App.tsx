import { RouterProvider } from './router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ReviewPage } from './pages/ReviewPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ComingSoonPage } from './pages/ComingSoonPage'; // Import the new page
import { useRouter } from './router';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      // These pages exist
      case '/':
        return <HomePage />;
      case '/review':
        return <ReviewPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
        
      // These pages do NOT exist, so we show "Coming Soon"
      case '/water-crisis':
      case '/emergency-water':
      case '/smart-water-vs-storage':
      case '/diy-vs-smart-water':
      case '/atmospheric-water':
      case '/contact':
        return <ComingSoonPage />;

      // Default to home page if a link is broken
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