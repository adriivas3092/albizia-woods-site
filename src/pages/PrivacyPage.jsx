import Header from '../components/Header';
import SEO from '../components/SEO';
import PrivacyContent from '../components/privacy/PrivacyContent';
import FinalCTA from '../components/FinalCTA';
import ScrollReveal from '../components/ScrollReveal';
import { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <SEO title="Privacy Policy | Albizia Woods" description="Read our privacy policy regarding data collection and usage." url="https://www.albiziawoods.com/privacy-policy" />
      <Header />
      <PrivacyContent />
      <FinalCTA />
    </main>
  );
}
