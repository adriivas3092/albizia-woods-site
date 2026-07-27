import { useState, useEffect } from 'react';
import styles from './PrivacyContent.module.css';
import ScrollReveal from '../ScrollReveal';
import { useLang } from '../../i18n/LanguageContext';

const HEADER = {
  en: { title: 'Privacy Policy', meta: 'Last Updated: October 2026 • Albizia Woods, Costa Rica' },
  es: { title: 'Política de Privacidad', meta: 'Última actualización: Octubre 2026 • Albizia Woods, Costa Rica' },
};

const SECTIONS = [
  {
    id: 'collection',
    en: {
      title: 'Information Collection',
      blocks: [
        { p: 'At Albizia Woods, we believe in transparency and respect for your personal information. When you interact with our studio—whether by submitting an inquiry, subscribing to our journal, or engaging with our digital platforms—we may collect specific personal data to better serve your architectural and design needs.' },
        { p: 'The information we collect may include:' },
        { list: [
          { label: 'Identity Data:', text: 'Full name and professional title (if applicable).' },
          { label: 'Contact Data:', text: 'Email address, phone number, and shipping/billing addresses.' },
          { label: 'Inquiry Data:', text: 'Details regarding your bespoke furniture requests or interior design projects submitted via our contact forms.' },
          { label: 'Technical Data:', text: 'IP address, browser type, device identifiers, and usage metrics collected automatically as you navigate our website.' },
        ] },
      ],
    },
    es: {
      title: 'Recolección de Información',
      blocks: [
        { p: 'En Albizia Woods creemos en la transparencia y el respeto por su información personal. Cuando usted interactúa con nuestro estudio —ya sea enviando una consulta, suscribiéndose a nuestro diario o interactuando con nuestras plataformas digitales— podemos recopilar ciertos datos personales para atender mejor sus necesidades de arquitectura y diseño.' },
        { p: 'La información que recopilamos puede incluir:' },
        { list: [
          { label: 'Datos de identidad:', text: 'Nombre completo y cargo profesional (si aplica).' },
          { label: 'Datos de contacto:', text: 'Correo electrónico, número de teléfono y direcciones de envío/facturación.' },
          { label: 'Datos de consulta:', text: 'Detalles sobre sus solicitudes de mobiliario a medida o proyectos de diseño de interiores enviados mediante nuestros formularios.' },
          { label: 'Datos técnicos:', text: 'Dirección IP, tipo de navegador, identificadores de dispositivo y métricas de uso recopiladas automáticamente mientras navega nuestro sitio.' },
        ] },
      ],
    },
  },
  {
    id: 'usage',
    en: {
      title: 'How We Use Your Data',
      blocks: [
        { p: 'The information we gather is employed exclusively to elevate your experience with Albizia Woods and fulfill our commitments to you. Specifically, we use your data to:' },
        { ul: [
          'Respond promptly to your bespoke design inquiries and project consultations.',
          'Process, craft, and deliver your furniture commissions.',
          'Improve our website architecture and ensure a seamless, premium digital experience.',
          'Communicate studio updates, new material acquisitions, and collection launches (only if you have opted-in to our journal).',
        ] },
      ],
    },
    es: {
      title: 'Cómo Usamos Sus Datos',
      blocks: [
        { p: 'La información que recopilamos se emplea exclusivamente para elevar su experiencia con Albizia Woods y cumplir nuestros compromisos con usted. En concreto, usamos sus datos para:' },
        { ul: [
          'Responder con prontitud a sus consultas de diseño a medida y a las asesorías de proyecto.',
          'Procesar, elaborar y entregar sus encargos de mobiliario.',
          'Mejorar la arquitectura de nuestro sitio y garantizar una experiencia digital fluida y premium.',
          'Comunicar novedades del estudio, nuevas adquisiciones de materiales y lanzamientos de colecciones (solo si se ha suscrito a nuestro diario).',
        ] },
      ],
    },
  },
  {
    id: 'cookies',
    en: {
      title: 'Cookies & Analytics',
      blocks: [
        { p: 'Our website utilizes cookies and similar tracking technologies to understand how our digital spaces are navigated. This allows us to refine our editorial layouts and ensure our content resonates with our audience.' },
        { pre: 'We integrate ', strong: 'Google Analytics', post: ' to aggregate anonymized data regarding user behavior, such as time spent on pages and geographic distribution. These insights are strictly used to enhance the performance and aesthetic delivery of our website. You may adjust your browser settings to decline cookies; however, this may affect the fluidity of your browsing experience.' },
      ],
    },
    es: {
      title: 'Cookies y Analítica',
      blocks: [
        { p: 'Nuestro sitio utiliza cookies y tecnologías de rastreo similares para comprender cómo se navegan nuestros espacios digitales. Esto nos permite refinar nuestros diseños editoriales y asegurar que nuestro contenido conecte con nuestra audiencia.' },
        { pre: 'Integramos ', strong: 'Google Analytics', post: ' para agregar datos anonimizados sobre el comportamiento del usuario, como el tiempo en las páginas y la distribución geográfica. Estos datos se usan estrictamente para mejorar el rendimiento y la presentación estética de nuestro sitio. Puede ajustar la configuración de su navegador para rechazar las cookies; sin embargo, esto podría afectar la fluidez de su experiencia de navegación.' },
      ],
    },
  },
  {
    id: 'advertising',
    en: {
      title: 'Advertising & Remarketing',
      blocks: [
        { pre: 'To share our craftsmanship with those who appreciate architectural design, we utilize the ', strong: 'Meta Pixel', post: ' (Facebook/Instagram). This tool helps us understand the effectiveness of our advertising campaigns and allows us to deliver relevant, curated content to users who have previously shown interest in Albizia Woods.' },
        { p: 'The Meta Pixel may collect data such as your IP address, web browser details, and the specific pages you viewed on our site. You can opt-out of targeted advertising by adjusting your ad preferences directly within your Facebook or Instagram account settings.' },
      ],
    },
    es: {
      title: 'Publicidad y Remarketing',
      blocks: [
        { pre: 'Para compartir nuestra artesanía con quienes aprecian el diseño arquitectónico, utilizamos el ', strong: 'Meta Pixel', post: ' (Facebook/Instagram). Esta herramienta nos ayuda a comprender la efectividad de nuestras campañas publicitarias y nos permite ofrecer contenido relevante y curado a usuarios que previamente han mostrado interés en Albizia Woods.' },
        { p: 'El Meta Pixel puede recopilar datos como su dirección IP, detalles de su navegador y las páginas específicas que visitó en nuestro sitio. Puede desactivar la publicidad segmentada ajustando sus preferencias de anuncios directamente en la configuración de su cuenta de Facebook o Instagram.' },
      ],
    },
  },
  {
    id: 'third-party',
    en: {
      title: 'Third-Party Services',
      blocks: [
        { p: 'Albizia Woods does not sell, rent, or trade your personal information. We only share necessary data with trusted third-party artisans, logistics partners, and digital service providers who assist us in operating our studio and delivering your pieces safely. All third-party partners are bound by strict confidentiality agreements and adhere to global data protection standards.' },
      ],
    },
    es: {
      title: 'Servicios de Terceros',
      blocks: [
        { p: 'Albizia Woods no vende, alquila ni comercializa su información personal. Solo compartimos los datos necesarios con artesanos, socios logísticos y proveedores de servicios digitales de confianza que nos ayudan a operar nuestro estudio y a entregar sus piezas de forma segura. Todos nuestros socios están sujetos a estrictos acuerdos de confidencialidad y cumplen con estándares globales de protección de datos.' },
      ],
    },
  },
  {
    id: 'rights',
    en: {
      title: 'Your Privacy Rights',
      blocks: [
        { p: 'You retain complete control over the narrative of your personal data. Depending on your jurisdiction, you have the right to:' },
        { ul: [
          'Request access to the personal data we hold about you.',
          'Request the correction of inaccurate or incomplete information.',
          'Request the deletion of your data from our archives.',
          'Withdraw consent for marketing communications at any time.',
        ] },
        { p: 'To exercise any of these rights, please contact our studio directly, and we will honor your request with the utmost priority.' },
      ],
    },
    es: {
      title: 'Sus Derechos de Privacidad',
      blocks: [
        { p: 'Usted conserva el control total sobre su información personal. Según su jurisdicción, tiene derecho a:' },
        { ul: [
          'Solicitar acceso a los datos personales que tenemos sobre usted.',
          'Solicitar la corrección de información inexacta o incompleta.',
          'Solicitar la eliminación de sus datos de nuestros archivos.',
          'Retirar su consentimiento para comunicaciones de marketing en cualquier momento.',
        ] },
        { p: 'Para ejercer cualquiera de estos derechos, contacte directamente a nuestro estudio y atenderemos su solicitud con la máxima prioridad.' },
      ],
    },
  },
  {
    id: 'contact',
    en: {
      title: 'Contact Us',
      blocks: [
        { p: 'If you have any questions regarding this Privacy Policy or how we handle your data, we invite you to reach out to our studio. We value open dialogue and are here to provide clarity.' },
        { address: ['Albizia Woods Studio', 'San José, Costa Rica'], email: 'studio@albiziawoods.com' },
      ],
    },
    es: {
      title: 'Contáctenos',
      blocks: [
        { p: 'Si tiene alguna pregunta sobre esta Política de Privacidad o sobre cómo manejamos sus datos, le invitamos a contactar a nuestro estudio. Valoramos el diálogo abierto y estamos aquí para brindarle claridad.' },
        { address: ['Albizia Woods Studio', 'San José, Costa Rica'], email: 'studio@albiziawoods.com' },
      ],
    },
  },
];

function Block({ block }) {
  if (block.list) {
    return (
      <ul>
        {block.list.map((it, i) => (
          <li key={i}><strong>{it.label}</strong> {it.text}</li>
        ))}
      </ul>
    );
  }
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
  if (block.strong) {
    return <p>{block.pre}<strong>{block.strong}</strong>{block.post}</p>;
  }
  return <p>{block.p}</p>;
}

export default function PrivacyContent() {
  const { lang } = useLang();
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

          {/* Policy Content */}
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
