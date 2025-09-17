import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BookCall } from './pages/BookCall';
import { ContactForm } from './components/ContactForm';
import { WebsiteDesignFunnels } from './pages/WebsiteDesignFunnels';
import { SmartAIAgents } from './pages/SmartAIAgents';
import { CRMIntegration } from './pages/CRMIntegration';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services/website-design-funnels" element={<WebsiteDesignFunnels />} />
          <Route path="/services/smart-ai-agents" element={<SmartAIAgents />} />
          <Route path="/services/crm-integration" element={<CRMIntegration />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;