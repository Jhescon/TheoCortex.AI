import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { TechLoadingAnimation } from './components/TechLoadingAnimation';

// Import page components
import { HomePage } from './pages/HomePage';
import { WebsiteDesignFunnels } from './pages/WebsiteDesignFunnels';
import { SmartAIAgents } from './pages/SmartAIAgents';
import { CRMIntegration } from './pages/CRMIntegration';
import { BookCall } from './pages/BookCall';
import { ContactForm } from './components/ContactForm';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 2000);
  };

  if (isLoading) {
    return <TechLoadingAnimation />;
  }

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigation} />} />
        <Route path="/website-design-funnels" element={<WebsiteDesignFunnels onNavigate={handleNavigation} />} />
        <Route path="/smart-ai-agents" element={<SmartAIAgents onNavigate={handleNavigation} />} />
        <Route path="/crm-integration" element={<CRMIntegration onNavigate={handleNavigation} />} />
        <Route path="/book-call" element={<BookCall onNavigate={handleNavigation} />} />
        <Route path="/contact" element={<ContactForm onNavigate={handleNavigation} />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;