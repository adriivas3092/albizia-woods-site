import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import BrandPhilosophy from '../components/BrandPhilosophy';
import Craftsmanship from '../components/Craftsmanship';
import DesignProcess from '../components/about/DesignProcess';
import Materials from '../components/Materials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandPhilosophy />
      <Craftsmanship />
      <DesignProcess />
      <Materials />
      <FinalCTA />
      <Footer />
    </>
  );
}
