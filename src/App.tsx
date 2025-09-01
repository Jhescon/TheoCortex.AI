import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BookCall } from './pages/BookCall';
import { WebsiteDesignFunnels } from './pages/WebsiteDesignFunnels';
import { SmartAIAgents } from './pages/SmartAIAgents';
import { CRMIntegration } from './pages/CRMIntegration';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/website-design-funnels" element={<WebsiteDesignFunnels />} />
        <Route path="/smart-ai-agents" element={<SmartAIAgents />} />
        <Route path="/crm-integration" element={<CRMIntegration />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;