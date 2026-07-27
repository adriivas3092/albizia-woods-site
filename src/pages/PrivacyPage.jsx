import Header from '../components/Header';
import SEO from '../components/SEO';
import PrivacyContent from '../components/privacy/PrivacyContent';
import FinalCTA from '../components/FinalCTA';
import ScrollReveal from '../components/ScrollReveal';
import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function PrivacyPage() {
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <SEO
        title={lang === 'es' ? 'Política de Privacidad | Albizia Woods' : 'Privacy Policy | Albizia Woods'}
        description={lang === 'es' ? 'Lea nuestra política de privacidad sobre la recolección y el uso de datos.' : 'Read our privacy policy regarding data collection and usage.'}
        url="https://www.albiziawoods.com/privacy-policy"
      />
      <Header />
      <PrivacyContent />
      <FinalCTA />
    </main>
  );
}
