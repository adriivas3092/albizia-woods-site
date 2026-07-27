import { useState } from 'react';
import styles from './OurTeam.module.css';
import ScrollReveal from '../ScrollReveal';

const DEPARTMENTS = [
  {
    name: 'Equipo de Diseño y Arquitectura',
    text: 'Asesores en el área de diseño de mobiliario y encargados de supervisar los procesos de fabricación y acabados de nuestros proyectos.',
    image: '/team/diseno-arquitectura.webp',
  },
  {
    name: 'Equipo Administrativo',
    text: 'Es el equipo encargado de la coordinación operativa de nuestros procesos, desde el diseño hasta la entrega de nuestros productos.',
    image: '/team/administrativo.webp',
  },
  {
    name: 'Equipo de Ebanistería',
    text: 'Nuestros talentosos ebanistas son los encargados de la fabricación de los muebles; su habilidad y atención al detalle aseguran que cada pieza se construya con precisión.',
    image: '/team/ebanisteria.webp',
  },
  {
    name: 'Equipo de Acabado',
    text: 'Nuestro equipo de lijadores y laqueadores son los encargados de la última fase de la fabricación de los muebles, siendo ellos los responsables de dar el toque final a nuestros productos con acabados impecables.',
    image: '/team/acabado.webp',
  },
];

const CLOSING = {
  text: 'En conjunto, nuestro equipo trabaja con pasión y dedicación para ofrecer mobiliario único y de alta calidad que se adapte a las necesidades de nuestros clientes.',
  image: '/team/equipo-completo.webp',
};

// Renders the photo, or an elegant placeholder while the real image is pending.
function TeamPhoto({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={styles.placeholder} aria-label={`${alt} (fotografía pendiente)`}>
        <span>Fotografía pendiente</span>
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
  return (
    <section className={styles.team}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className={styles.label}>El Equipo Albizia</span>
          <h2>Our Team</h2>
        </ScrollReveal>

        <div className={styles.departments}>
          {DEPARTMENTS.map((dep, idx) => (
            <ScrollReveal
              key={dep.name}
              className={`${styles.row} ${idx % 2 === 1 ? styles.reversed : ''}`}
            >
              <div className={styles.imageCol}>
                <TeamPhoto src={dep.image} alt={dep.name} />
              </div>
              <div className={styles.textCol}>
                <span className={styles.depIndex}>0{idx + 1}</span>
                <h3>{dep.name}</h3>
                <p>{dep.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className={styles.closing}>
          <div className={styles.closingImage}>
            <TeamPhoto src={CLOSING.image} alt="Equipo completo de Albizia Woods" />
          </div>
          <p className={styles.closingText}>{CLOSING.text}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
