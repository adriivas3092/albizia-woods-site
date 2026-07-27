import { useEffect } from 'react';
import TeamHero from '../components/team/TeamHero';
import OurTeam from '../components/about/OurTeam';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useLang } from '../i18n/LanguageContext';

export default function TeamPage() {
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title={lang === 'es' ? 'Nuestro Equipo | Albizia Woods' : 'Our Team | Albizia Woods'}
        description={
          lang === 'es'
            ? 'Conocé al equipo de Albizia Woods: diseño y arquitectura, administración, ebanistería y acabado.'
            : 'Meet the Albizia Woods team: design & architecture, administration, cabinetmaking and finishing.'
        }
      />
      <TeamHero />
      <OurTeam />
      <Footer />
    </>
  );
}
