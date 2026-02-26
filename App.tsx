import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { GalleryPage } from './components/GalleryPage';
import { FAQPage } from './components/FAQPage';
import { CalculatorPage } from './components/CalculatorPage';
import { QuotePage } from './components/QuotePage';
import { ContactPage } from './components/ContactPage';
import { ServiceAreasPage } from './components/ServiceAreasPage';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';
import { BeaverBot } from './components/BeaverBot';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ScrollToHash } from './components/ScrollToHash';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-beaver-cream flex flex-col font-sans pb-16 md:pb-0">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BeaverBot />
        <StickyMobileBar />
      </div>
    </Router>
  );
}

export default App;