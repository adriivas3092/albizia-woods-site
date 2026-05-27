import Header from '../components/Header';
import SEO from '../components/SEO';
import TermsContent from '../components/privacy/TermsContent';
import FinalCTA from '../components/FinalCTA';
import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <SEO title="Terms of Service | Albizia Woods" description="Read the terms of service for using the Albizia Woods website and services." url="https://www.albiziawoods.com/terms-of-service" />
      <Header />
      <TermsContent />
      <FinalCTA />
    </main>
  );
}
