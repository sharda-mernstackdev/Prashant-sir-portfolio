import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrainingModal from './components/TrainingModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onOpenModal={openModal} />

      <main>
        <Routes>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/about" element={<About onOpenModal={openModal} />} />
          <Route path="/services" element={<Services onOpenModal={openModal} />} />
          <Route path="/services/:slug" element={<ServiceDetail onOpenModal={openModal} />} />
          {/* Backward compat - old /training URL redirects to /services */}
          <Route path="/training" element={<Navigate to="/services" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
      <TrainingModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
