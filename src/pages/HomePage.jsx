import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import BrandPhilosophy from '../components/BrandPhilosophy';
import Craftsmanship from '../components/Craftsmanship';
import CustomExperience from '../components/CustomExperience';
import DesignProcess from '../components/about/DesignProcess';
import ProjectsAndSpaces from '../components/ProjectsAndSpaces';
import Materials from '../components/Materials';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandPhilosophy />
      <Craftsmanship />
      <CustomExperience />
      <DesignProcess />
      <ProjectsAndSpaces />
      <Materials />
      <FinalCTA />
      <Footer />
    </>
  );
}
