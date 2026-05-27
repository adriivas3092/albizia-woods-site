import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CollectionsPage from './pages/CollectionsPage';
import BespokePage from './pages/BespokePage';
import MaterialsPage from './pages/MaterialsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookieBanner from './components/CookieBanner';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/bespoke" element={<BespokePage />} />
      <Route path="/materials" element={<MaterialsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/terms-of-service" element={<TermsPage />} />
    </Routes>
    <CookieBanner />
    <FloatingWhatsApp />
    </>
  );
}

export default App;
