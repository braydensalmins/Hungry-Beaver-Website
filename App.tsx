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
import { AboutPage } from './components/AboutPage';
import { ResidentialPage } from './components/ResidentialPage';
import { CommercialPage } from './components/CommercialPage';
import { MunicipalPage } from './components/MunicipalPage';
import { RaisedRootsPage } from './components/RaisedRootsPage';
import { StumpGrindingCostPage } from './components/StumpGrindingCostPage';
import { NotFound } from './components/NotFound';
import { Footer } from './components/Footer';
import { BeaverBot } from './components/BeaverBot';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ScrollToHash } from './components/ScrollToHash';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/residential" element={<ResidentialPage />} />
            <Route path="/services/commercial" element={<CommercialPage />} />
            <Route path="/services/municipal" element={<MunicipalPage />} />
            <Route path="/services/raised-roots" element={<RaisedRootsPage />} />
            <Route path="/stump-grinding-cost-phoenix" element={<StumpGrindingCostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BeaverBot />
        <StickyMobileBar />
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;