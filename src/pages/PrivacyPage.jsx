import Header from '../components/Header';
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
      <Header />
      <PrivacyContent />
      <FinalCTA />
    </main>
  );
}
