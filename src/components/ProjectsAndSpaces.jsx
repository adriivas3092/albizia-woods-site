import styles from './ProjectsAndSpaces.module.css';
import ScrollReveal from './ScrollReveal';
import { useLang } from '../i18n/LanguageContext';

const CATEGORY = {
  residential: { en: 'Residential', es: 'Residencial' },
  hospitality: { en: 'Hospitality', es: 'Hotelería' },
  commercial: { en: 'Commercial', es: 'Comercial' },
};

const PROJECTS = [
  { image: '/Proyectos/Lat90_BAJA070.webp', title: 'Casa Tropical', category: 'residential', location: 'Nosara' },
  { image: '/Proyectos/Lat90_BAJA079.webp', title: 'Villa Papagayo', category: 'hospitality', location: 'Guanacaste' },
  { image: '/Proyectos/Lat90_BAJA080.webp', title: 'Estudio Central', category: 'commercial', location: 'San José' },
  { image: '/Proyectos/Lat90_BAJA088.webp', title: 'Reserva Conchal', category: 'residential', location: 'Brasilito' },
  { image: '/Proyectos/Lat90_BAJA108.webp', title: 'Boutique Hotel', category: 'hospitality', location: 'Santa Teresa' },
];

const COPY = {
  en: { title: 'Selected Spaces', text: 'Where architecture meets bespoke craftsmanship.' },
  es: { title: 'Espacios Seleccionados', text: 'Donde la arquitectura se encuentra con la artesanía a medida.' },
};

export default function ProjectsAndSpaces() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.projects}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
          </div>
        </ScrollReveal>

        <div className={styles.gallery}>
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={index} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} loading="lazy" className="hover-zoom" decoding="async" />
              </div>
              <div className={styles.meta}>
                <h3>{project.title}</h3>
                <p>{CATEGORY[project.category][lang]} • {project.location}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
