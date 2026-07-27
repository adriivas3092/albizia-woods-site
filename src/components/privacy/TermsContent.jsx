import { useState, useEffect } from 'react';
import styles from './PrivacyContent.module.css';
import ScrollReveal from '../ScrollReveal';
import { useLang } from '../../i18n/LanguageContext';

const HEADER = {
  en: { title: 'Terms of Service', meta: 'Effective Date: October 2026 • Albizia Woods, Costa Rica' },
  es: { title: 'Términos de Servicio', meta: 'Fecha de vigencia: Octubre 2026 • Albizia Woods, Costa Rica' },
};

const SECTIONS = [
  {
    id: 'usage',
    en: {
      title: 'Website Usage',
      blocks: [
        { p: 'Welcome to the digital home of Albizia Woods. By accessing and navigating our website, you agree to engage with our digital presence in a manner that is respectful and aligns with these Terms of Service.' },
        { p: 'Our platform is designed to showcase our bespoke furniture, architectural woodworking, and design philosophy. We reserve the right to modify, suspend, or discontinue any aspect of the website at our discretion, without prior notice, as our studio evolves.' },
        { p: 'As a user, you agree not to interfere with the security, functionality, or performance of the website, nor attempt to access restricted areas of our digital infrastructure.' },
      ],
    },
    es: {
      title: 'Uso del Sitio Web',
      blocks: [
        { p: 'Bienvenido al hogar digital de Albizia Woods. Al acceder y navegar por nuestro sitio, usted acepta interactuar con nuestra presencia digital de una manera respetuosa y acorde con estos Términos de Servicio.' },
        { p: 'Nuestra plataforma está diseñada para mostrar nuestro mobiliario a medida, la ebanistería arquitectónica y nuestra filosofía de diseño. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto del sitio a nuestra discreción, sin previo aviso, a medida que nuestro estudio evoluciona.' },
        { p: 'Como usuario, usted acepta no interferir con la seguridad, la funcionalidad o el rendimiento del sitio, ni intentar acceder a áreas restringidas de nuestra infraestructura digital.' },
      ],
    },
  },
  {
    id: 'intellectual-property',
    en: {
      title: 'Intellectual Property & Content Ownership',
      blocks: [
        { p: 'Every photograph, design sketch, text block, and architectural concept presented on this website is the exclusive intellectual property of Albizia Woods or our creative partners.' },
        { p: 'We encourage you to draw inspiration from our portfolio; however, you may not reproduce, distribute, modify, or exploit our imagery, designs, or written content for commercial purposes without our explicit, written consent. The "Albizia Woods" name, logos, and distinct visual identity are protected trademarks.' },
      ],
    },
    es: {
      title: 'Propiedad Intelectual y Titularidad del Contenido',
      blocks: [
        { p: 'Cada fotografía, boceto de diseño, bloque de texto y concepto arquitectónico presentado en este sitio es propiedad intelectual exclusiva de Albizia Woods o de nuestros socios creativos.' },
        { p: 'Le invitamos a inspirarse en nuestro portafolio; sin embargo, no puede reproducir, distribuir, modificar ni explotar nuestras imágenes, diseños o contenido escrito con fines comerciales sin nuestro consentimiento explícito y por escrito. El nombre "Albizia Woods", los logotipos y nuestra identidad visual distintiva son marcas registradas protegidas.' },
      ],
    },
  },
  {
    id: 'submissions',
    en: {
      title: 'Quote & Contact Submissions',
      blocks: [
        { p: 'When you submit a request for a bespoke quote or project consultation through our contact forms, you agree to provide accurate and current information to the best of your ability.' },
        { p: "Submitting a design inquiry does not constitute a binding contract for services or manufacturing. A formal agreement, outlining timelines, material sourcing, and costs, will be drafted and signed only after a mutual consultation. We reserve the right to respectfully decline project requests that do not align with our studio's capacity or design philosophy." },
      ],
    },
    es: {
      title: 'Solicitudes de Cotización y Contacto',
      blocks: [
        { p: 'Cuando envía una solicitud de cotización a medida o de asesoría de proyecto a través de nuestros formularios, usted acepta proporcionar información precisa y actualizada en la medida de sus posibilidades.' },
        { p: 'El envío de una consulta de diseño no constituye un contrato vinculante de servicios o de fabricación. Un acuerdo formal, que detalle plazos, abastecimiento de materiales y costos, se redactará y firmará únicamente después de una consulta mutua. Nos reservamos el derecho de rechazar respetuosamente solicitudes de proyecto que no se alineen con la capacidad o la filosofía de diseño de nuestro estudio.' },
      ],
    },
  },
  {
    id: 'liability',
    en: {
      title: 'Limitations of Liability',
      blocks: [
        { p: 'While we strive to ensure that all information on this website—including wood grain descriptions, finish tones, and project dimensions—is as accurate as possible, the organic nature of our materials means that physical realities will always vary slightly from digital representations.' },
        { p: 'Albizia Woods shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of this website, any interruptions in service, or reliance on the information presented herein.' },
      ],
    },
    es: {
      title: 'Limitaciones de Responsabilidad',
      blocks: [
        { p: 'Si bien nos esforzamos por garantizar que toda la información de este sitio —incluidas las descripciones de la veta de la madera, los tonos de los acabados y las dimensiones de los proyectos— sea lo más precisa posible, la naturaleza orgánica de nuestros materiales implica que la realidad física siempre variará ligeramente respecto a las representaciones digitales.' },
        { p: 'Albizia Woods no será responsable por daños directos, indirectos, incidentales o consecuentes que surjan del uso de este sitio, de cualquier interrupción del servicio o de la confianza depositada en la información aquí presentada.' },
      ],
    },
  },
  {
    id: 'external-links',
    en: {
      title: 'External Links',
      blocks: [
        { p: 'Occasionally, our journal or project descriptions may contain links to external partners, photographers, or architectural studios. These links are provided for your inspiration and convenience. Albizia Woods does not govern these external platforms and is not responsible for their content, privacy practices, or terms of use.' },
      ],
    },
    es: {
      title: 'Enlaces Externos',
      blocks: [
        { p: 'Ocasionalmente, nuestro diario o las descripciones de proyectos pueden contener enlaces a socios externos, fotógrafos o estudios de arquitectura. Estos enlaces se ofrecen para su inspiración y comodidad. Albizia Woods no controla estas plataformas externas y no se hace responsable de su contenido, sus prácticas de privacidad o sus términos de uso.' },
      ],
    },
  },
  {
    id: 'jurisdiction',
    en: {
      title: 'Legal Jurisdiction',
      blocks: [
        { p: 'Albizia Woods operates out of San José, Costa Rica. Consequently, these Terms of Service, and any disputes arising from your use of our website or services, shall be governed by and construed in accordance with the laws of the Republic of Costa Rica.' },
        { p: 'By using this site, you consent to the exclusive jurisdiction of the Costa Rican courts for any legal proceedings related to our digital or physical operations.' },
      ],
    },
    es: {
      title: 'Jurisdicción Legal',
      blocks: [
        { p: 'Albizia Woods opera desde San José, Costa Rica. En consecuencia, estos Términos de Servicio, y cualquier disputa que surja del uso de nuestro sitio o servicios, se regirán e interpretarán de acuerdo con las leyes de la República de Costa Rica.' },
        { p: 'Al usar este sitio, usted consiente la jurisdicción exclusiva de los tribunales costarricenses para cualquier procedimiento legal relacionado con nuestras operaciones digitales o físicas.' },
      ],
    },
  },
  {
    id: 'contact',
    en: {
      title: 'Contact Information',
      blocks: [
        { p: 'If you require clarification on any of our terms or wish to discuss a bespoke commission, our studio team is always available to assist you.' },
        { address: ['Albizia Woods Studio', 'San José, Costa Rica'], email: 'studio@albiziawoods.com' },
      ],
    },
    es: {
      title: 'Información de Contacto',
      blocks: [
        { p: 'Si necesita aclaraciones sobre alguno de nuestros términos o desea conversar sobre un encargo a medida, nuestro equipo del estudio siempre está disponible para ayudarle.' },
        { address: ['Albizia Woods Studio', 'San José, Costa Rica'], email: 'studio@albiziawoods.com' },
      ],
    },
  },
];

function Block({ block }) {
  if (block.ul) {
    return (
      <ul>
        {block.ul.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    );
  }
  if (block.address) {
    return (
      <p>
        <strong>{block.address[0]}</strong><br />
        {block.address[1]}<br />
        <a href={`mailto:${block.email}`}>{block.email}</a>
      </p>
    );
  }
  return <p>{block.p}</p>;
}

export default function TermsContent() {
  const { lang } = useLang();
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
          <h1>{HEADER[lang].title}</h1>
          <p>{HEADER[lang].meta}</p>
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
                  {section[lang].title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Terms Content */}
          <div className={styles.content}>
            {SECTIONS.map((section) => (
              <ScrollReveal key={section.id} id={section.id} className={styles.section}>
                <h2>{section[lang].title}</h2>
                {section[lang].blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
