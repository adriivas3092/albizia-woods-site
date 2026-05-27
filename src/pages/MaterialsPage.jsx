import MaterialsHero from '../components/materials/MaterialsHero';
import SEO from '../components/SEO';
import MaterialsStory from '../components/materials/MaterialsStory';
import MaterialsGallery from '../components/materials/MaterialsGallery';
import MaterialsCraftsmanship from '../components/materials/MaterialsCraftsmanship';
import MaterialsInspiration from '../components/materials/MaterialsInspiration';
import MaterialsInquiryCTA from '../components/materials/MaterialsInquiryCTA';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function MaterialsPage() {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <MaterialsHero />
      <MaterialsStory />
      <MaterialsGallery />
      <MaterialsCraftsmanship />
      <MaterialsInspiration />
      <MaterialsInquiryCTA />
      <Footer />
    </div>
  );
}
