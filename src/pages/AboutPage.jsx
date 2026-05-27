import AboutHero from '../components/about/AboutHero';
import OriginStory from '../components/about/OriginStory';
import NameMeaning from '../components/about/NameMeaning';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import BrandValues from '../components/about/BrandValues';
import WorkshopProcess from '../components/about/WorkshopProcess';
import MissionVision from '../components/about/MissionVision';
import CostaRicanIdentity from '../components/about/CostaRicanIdentity';
import AboutCTA from '../components/about/AboutCTA';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function AboutPage() {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHero />
      <OriginStory />
      <NameMeaning />
      <AboutPhilosophy />
      <BrandValues />
      <WorkshopProcess />
      <MissionVision />
      <CostaRicanIdentity />
      <AboutCTA />
      <Footer />
    </>
  );
}
