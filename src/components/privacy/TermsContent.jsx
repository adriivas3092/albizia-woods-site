import { useState, useEffect } from 'react';
import styles from './PrivacyContent.module.css';
import ScrollReveal from '../ScrollReveal';

const SECTIONS = [
  { id: 'usage', title: 'Website Usage' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'submissions', title: 'Quote & Contact Submissions' },
  { id: 'liability', title: 'Limitations of Liability' },
  { id: 'external-links', title: 'External Links' },
  { id: 'jurisdiction', title: 'Legal Jurisdiction' },
  { id: 'contact', title: 'Contact Information' }
];

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState('usage');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200; // Offset for fixed header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.privacy}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <h1>Terms of Service</h1>
          <p>Effective Date: October 2026 • Albizia Woods, Costa Rica</p>
        </ScrollReveal>

        <div className={styles.layout}>
          {/* Sticky Navigation */}
          <aside className={styles.sidebar}>
            <nav className={styles.nav}>
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={activeSection === section.id ? styles.active : ''}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Terms Content */}
          <div className={styles.content}>
            
            <ScrollReveal id="usage" className={styles.section}>
              <h2>Website Usage</h2>
              <p>
                Welcome to the digital home of Albizia Woods. By accessing and navigating our website, you agree to engage with our digital presence in a manner that is respectful and aligns with these Terms of Service. 
              </p>
              <p>
                Our platform is designed to showcase our bespoke furniture, architectural woodworking, and design philosophy. We reserve the right to modify, suspend, or discontinue any aspect of the website at our discretion, without prior notice, as our studio evolves.
              </p>
              <p>
                As a user, you agree not to interfere with the security, functionality, or performance of the website, nor attempt to access restricted areas of our digital infrastructure.
              </p>
            </ScrollReveal>

            <ScrollReveal id="intellectual-property" className={styles.section}>
              <h2>Intellectual Property & Content Ownership</h2>
              <p>
                Every photograph, design sketch, text block, and architectural concept presented on this website is the exclusive intellectual property of Albizia Woods or our creative partners.
              </p>
              <p>
                We encourage you to draw inspiration from our portfolio; however, you may not reproduce, distribute, modify, or exploit our imagery, designs, or written content for commercial purposes without our explicit, written consent. The "Albizia Woods" name, logos, and distinct visual identity are protected trademarks.
              </p>
            </ScrollReveal>

            <ScrollReveal id="submissions" className={styles.section}>
              <h2>Quote & Contact Submissions</h2>
              <p>
                When you submit a request for a bespoke quote or project consultation through our contact forms, you agree to provide accurate and current information to the best of your ability.
              </p>
              <p>
                Submitting a design inquiry does not constitute a binding contract for services or manufacturing. A formal agreement, outlining timelines, material sourcing, and costs, will be drafted and signed only after a mutual consultation. We reserve the right to respectfully decline project requests that do not align with our studio's capacity or design philosophy.
              </p>
            </ScrollReveal>

            <ScrollReveal id="liability" className={styles.section}>
              <h2>Limitations of Liability</h2>
              <p>
                While we strive to ensure that all information on this website—including wood grain descriptions, finish tones, and project dimensions—is as accurate as possible, the organic nature of our materials means that physical realities will always vary slightly from digital representations.
              </p>
              <p>
                Albizia Woods shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of this website, any interruptions in service, or reliance on the information presented herein.
              </p>
            </ScrollReveal>

            <ScrollReveal id="external-links" className={styles.section}>
              <h2>External Links</h2>
              <p>
                Occasionally, our journal or project descriptions may contain links to external partners, photographers, or architectural studios. These links are provided for your inspiration and convenience. Albizia Woods does not govern these external platforms and is not responsible for their content, privacy practices, or terms of use.
              </p>
            </ScrollReveal>

            <ScrollReveal id="jurisdiction" className={styles.section}>
              <h2>Legal Jurisdiction</h2>
              <p>
                Albizia Woods operates out of San José, Costa Rica. Consequently, these Terms of Service, and any disputes arising from your use of our website or services, shall be governed by and construed in accordance with the laws of the Republic of Costa Rica.
              </p>
              <p>
                By using this site, you consent to the exclusive jurisdiction of the Costa Rican courts for any legal proceedings related to our digital or physical operations.
              </p>
            </ScrollReveal>

            <ScrollReveal id="contact" className={styles.section}>
              <h2>Contact Information</h2>
              <p>
                If you require clarification on any of our terms or wish to discuss a bespoke commission, our studio team is always available to assist you.
              </p>
              <p>
                <strong>Albizia Woods Studio</strong><br />
                San José, Costa Rica<br />
                <a href="mailto:studio@albiziawoods.com">studio@albiziawoods.com</a>
              </p>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
