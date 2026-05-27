import Header from '../components/Header';
import TermsContent from '../components/privacy/TermsContent';
import FinalCTA from '../components/FinalCTA';
import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Header />
      <TermsContent />
      <FinalCTA />
    </main>
  );
}
