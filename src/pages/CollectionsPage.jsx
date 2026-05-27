import CollectionsHero from '../components/collections/CollectionsHero';
import SEO from '../components/SEO';
import CategoryShowcase from '../components/collections/CategoryShowcase';
import MaterialDetail from '../components/collections/MaterialDetail';
import LifestyleEditorial from '../components/collections/LifestyleEditorial';
import InquiryCTA from '../components/collections/InquiryCTA';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function CollectionsPage() {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CollectionsHero />
      <CategoryShowcase />
      <MaterialDetail />
      <LifestyleEditorial />
      <InquiryCTA />
      <Footer />
    </>
  );
}
