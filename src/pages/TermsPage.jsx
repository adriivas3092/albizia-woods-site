import Header from '../components/Header';
import SEO from '../components/SEO';
import TermsContent from '../components/privacy/TermsContent';
import FinalCTA from '../components/FinalCTA';
import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function TermsPage() {
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <SEO
        title={lang === 'es' ? 'Términos de Servicio | Albizia Woods' : 'Terms of Service | Albizia Woods'}
        description={lang === 'es' ? 'Lea los términos de servicio para el uso del sitio y los servicios de Albizia Woods.' : 'Read the terms of service for using the Albizia Woods website and services.'}
        url="https://www.albiziawoods.com/terms-of-service"
      />
      <Header />
      <TermsContent />
      <FinalCTA />
    </main>
  );
}
