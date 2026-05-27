import { useState, useEffect } from 'react';
import styles from './PrivacyContent.module.css';
import ScrollReveal from '../ScrollReveal';

const SECTIONS = [
  { id: 'collection', title: 'Information Collection' },
  { id: 'usage', title: 'How We Use Your Data' },
  { id: 'cookies', title: 'Cookies & Analytics' },
  { id: 'advertising', title: 'Advertising & Remarketing' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'rights', title: 'Your Privacy Rights' },
  { id: 'contact', title: 'Contact Us' }
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState('collection');

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
          <h1>Privacy Policy</h1>
          <p>Last Updated: October 2026 • Albizia Woods, Costa Rica</p>
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

          {/* Policy Content */}
          <div className={styles.content}>
            
            <ScrollReveal id="collection" className={styles.section}>
              <h2>Information Collection</h2>
              <p>
                At Albizia Woods, we believe in transparency and respect for your personal information. When you interact with our studio—whether by submitting an inquiry, subscribing to our journal, or engaging with our digital platforms—we may collect specific personal data to better serve your architectural and design needs.
              </p>
              <p>The information we collect may include:</p>
              <ul>
                <li><strong>Identity Data:</strong> Full name and professional title (if applicable).</li>
                <li><strong>Contact Data:</strong> Email address, phone number, and shipping/billing addresses.</li>
                <li><strong>Inquiry Data:</strong> Details regarding your bespoke furniture requests or interior design projects submitted via our contact forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, and usage metrics collected automatically as you navigate our website.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal id="usage" className={styles.section}>
              <h2>How We Use Your Data</h2>
              <p>
                The information we gather is employed exclusively to elevate your experience with Albizia Woods and fulfill our commitments to you. Specifically, we use your data to:
              </p>
              <ul>
                <li>Respond promptly to your bespoke design inquiries and project consultations.</li>
                <li>Process, craft, and deliver your furniture commissions.</li>
                <li>Improve our website architecture and ensure a seamless, premium digital experience.</li>
                <li>Communicate studio updates, new material acquisitions, and collection launches (only if you have opted-in to our journal).</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal id="cookies" className={styles.section}>
              <h2>Cookies & Analytics</h2>
              <p>
                Our website utilizes cookies and similar tracking technologies to understand how our digital spaces are navigated. This allows us to refine our editorial layouts and ensure our content resonates with our audience.
              </p>
              <p>
                We integrate <strong>Google Analytics</strong> to aggregate anonymized data regarding user behavior, such as time spent on pages and geographic distribution. These insights are strictly used to enhance the performance and aesthetic delivery of our website. You may adjust your browser settings to decline cookies; however, this may affect the fluidity of your browsing experience.
              </p>
            </ScrollReveal>

            <ScrollReveal id="advertising" className={styles.section}>
              <h2>Advertising & Remarketing</h2>
              <p>
                To share our craftsmanship with those who appreciate architectural design, we utilize the <strong>Meta Pixel</strong> (Facebook/Instagram). This tool helps us understand the effectiveness of our advertising campaigns and allows us to deliver relevant, curated content to users who have previously shown interest in Albizia Woods.
              </p>
              <p>
                The Meta Pixel may collect data such as your IP address, web browser details, and the specific pages you viewed on our site. You can opt-out of targeted advertising by adjusting your ad preferences directly within your Facebook or Instagram account settings.
              </p>
            </ScrollReveal>

            <ScrollReveal id="third-party" className={styles.section}>
              <h2>Third-Party Services</h2>
              <p>
                Albizia Woods does not sell, rent, or trade your personal information. We only share necessary data with trusted third-party artisans, logistics partners, and digital service providers who assist us in operating our studio and delivering your pieces safely. All third-party partners are bound by strict confidentiality agreements and adhere to global data protection standards.
              </p>
            </ScrollReveal>

            <ScrollReveal id="rights" className={styles.section}>
              <h2>Your Privacy Rights</h2>
              <p>
                You retain complete control over the narrative of your personal data. Depending on your jurisdiction, you have the right to:
              </p>
              <ul>
                <li>Request access to the personal data we hold about you.</li>
                <li>Request the correction of inaccurate or incomplete information.</li>
                <li>Request the deletion of your data from our archives.</li>
                <li>Withdraw consent for marketing communications at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact our studio directly, and we will honor your request with the utmost priority.
              </p>
            </ScrollReveal>

            <ScrollReveal id="contact" className={styles.section}>
              <h2>Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy or how we handle your data, we invite you to reach out to our studio. We value open dialogue and are here to provide clarity.
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
