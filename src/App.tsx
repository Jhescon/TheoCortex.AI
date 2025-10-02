import React from 'react';
import { ContactForm } from './components/ContactForm';
import { BookCall } from './pages/BookCall';
import { SmartAIAgents } from './pages/SmartAIAgents';
import { CRMIntegration } from './pages/CRMIntegration';
import { WebsiteDesignFunnels } from './pages/WebsiteDesignFunnels';
import { ThankYou } from './pages/ThankYou';

function App() {
  // Simple routing based on URL hash
  const currentPath = window.location.hash.slice(1) || window.location.pathname.slice(1);
  
  // Route to different pages based on path
  switch (currentPath) {
    case 'book-call':
      return <BookCall />;
    case 'smart-ai-agents':
      return <SmartAIAgents />;
    case 'crm-integration':
      return <CRMIntegration />;
    case 'website-design-funnels':
      return <WebsiteDesignFunnels />;
    case 'contact':
      return <ContactForm />;
    case 'thank-you':
      return <ThankYou />;
    default:
      return <ContactForm />;
  }
}

export default App;