import ContactHero from '../components/contact/ContactHero';
import ContactPhilosophy from '../components/contact/ContactPhilosophy';
import ContactForm from '../components/contact/ContactForm';
import ContactStudio from '../components/contact/ContactStudio';
import ContactClosing from '../components/contact/ContactClosing';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function ContactPage() {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <ContactHero />
      <ContactPhilosophy />
      <ContactForm />
      <ContactStudio />
      <ContactClosing />
      <Footer />
    </div>
  );
}
