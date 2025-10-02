import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ThankYou } from './pages/ThankYou';

function App() {
  // Simple routing based on hash
  const currentPath = window.location.hash.slice(1) || '/';

  const renderPage = () => {
    switch (currentPath) {
      case '/thank-you':
        return <ThankYou />;
      case '/':
      default:
        return <ContactForm />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;