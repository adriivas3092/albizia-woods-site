import { useState } from 'react';
import styles from './OurTeam.module.css';
import ScrollReveal from '../ScrollReveal';
import { useLang } from '../../i18n/LanguageContext';

const DEPARTMENTS = [
  {
    image: '/team/diseno-arquitectura.webp',
    en: {
      name: 'Design & Architecture Team',
      text: 'Advisors in furniture design and responsible for supervising the fabrication and finishing processes of our projects.',
    },
    es: {
      name: 'Equipo de Diseño y Arquitectura',
      text: 'Asesores en el área de diseño de mobiliario y encargados de supervisar los procesos de fabricación y acabados de nuestros proyectos.',
    },
  },
  {
    image: '/team/administrativo.webp',
    en: {
      name: 'Administrative Team',
      text: 'The team in charge of the operational coordination of our processes, from design through to the delivery of our products.',
    },
    es: {
      name: 'Equipo Administrativo',
      text: 'Es el equipo encargado de la coordinación operativa de nuestros procesos, desde el diseño hasta la entrega de nuestros productos.',
    },
  },
  {
    image: '/team/ebanisteria.webp',
    en: {
      name: 'Cabinetmaking Team',
      text: 'Our talented cabinetmakers are responsible for building the furniture; their skill and attention to detail ensure every piece is crafted with precision.',
    },
    es: {
      name: 'Equipo de Ebanistería',
      text: 'Nuestros talentosos ebanistas son los encargados de la fabricación de los muebles; su habilidad y atención al detalle aseguran que cada pieza se construya con precisión.',
    },
  },
  {
    image: '/team/acabado.webp',
    en: {
      name: 'Finishing Team',
      text: 'Our sanders and lacquerers handle the final phase of furniture production, responsible for giving our products their flawless finishing touch.',
    },
    es: {
      name: 'Equipo de Acabado',
      text: 'Nuestro equipo de lijadores y laqueadores son los encargados de la última fase de la fabricación de los muebles, siendo ellos los responsables de dar el toque final a nuestros productos con acabados impecables.',
    },
  },
];

const CLOSING = {
  image: '/team/equipo-completo.webp',
  en: "Together, our team works with passion and dedication to deliver unique, high-quality furniture tailored to our clients' needs.",
  es: 'En conjunto, nuestro equipo trabaja con pasión y dedicación para ofrecer mobiliario único y de alta calidad que se adapte a las necesidades de nuestros clientes.',
};

const PLACEHOLDER = { en: 'Photo coming soon', es: 'Fotografía pendiente' };

// Renders the photo, or an elegant placeholder while the real image is pending.
function TeamPhoto({ src, alt, placeholderLabel }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={styles.placeholder} aria-label={`${alt} (${placeholderLabel})`}>
        <span>{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={styles.image}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default function OurTeam() {
  const { lang } = useLang();

  return (
    <section className={styles.team}>
      <div className="container">
        <div className={styles.departments}>
          {DEPARTMENTS.map((dep, idx) => (
            <ScrollReveal
              key={dep.image}
              className={`${styles.row} ${idx % 2 === 1 ? styles.reversed : ''}`}
            >
              <div className={styles.imageCol}>
                <TeamPhoto src={dep.image} alt={dep[lang].name} placeholderLabel={PLACEHOLDER[lang]} />
              </div>
              <div className={styles.textCol}>
                <span className={styles.depIndex}>0{idx + 1}</span>
                <h3>{dep[lang].name}</h3>
                <p>{dep[lang].text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className={styles.closing}>
          <div className={styles.closingImage}>
            <TeamPhoto
              src={CLOSING.image}
              alt={lang === 'es' ? 'Equipo completo de Albizia Woods' : 'The full Albizia Woods team'}
              placeholderLabel={PLACEHOLDER[lang]}
            />
          </div>
          <p className={styles.closingText}>{CLOSING[lang]}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
