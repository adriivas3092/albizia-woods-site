import BespokeHero from '../components/bespoke/BespokeHero';
import SEO from '../components/SEO';
import BespokePhilosophy from '../components/bespoke/BespokePhilosophy';
import BespokeProcess from '../components/bespoke/BespokeProcess';
import BespokeMaterials from '../components/bespoke/BespokeMaterials';
import BespokeInspiration from '../components/bespoke/BespokeInspiration';
import BespokeWorkshop from '../components/bespoke/BespokeWorkshop';
import BespokeConsultation from '../components/bespoke/BespokeConsultation';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function BespokePage() {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <BespokeHero />
      <BespokePhilosophy />
      <BespokeProcess />
      <BespokeMaterials />
      <BespokeInspiration />
      <BespokeWorkshop />
      <BespokeConsultation />
      <Footer />
    </div>
  );
}
