import styles from './ProjectsAndSpaces.module.css';
import ScrollReveal from './ScrollReveal';

const PROJECTS = [
  {
    image: '/Proyectos/Lat90_BAJA070.jpg',
    title: 'Casa Tropical',
    subtitle: 'Residential • Nosara'
  },
  {
    image: '/Proyectos/Lat90_BAJA079.jpg',
    title: 'Villa Papagayo',
    subtitle: 'Hospitality • Guanacaste'
  },
  {
    image: '/Proyectos/Lat90_BAJA080.jpg',
    title: 'Estudio Central',
    subtitle: 'Commercial • San José'
  },
  {
    image: '/Proyectos/Lat90_BAJA088.jpg',
    title: 'Reserva Conchal',
    subtitle: 'Residential • Brasilito'
  },
  {
    image: '/Proyectos/Lat90_BAJA108.jpg',
    title: 'Boutique Hotel',
    subtitle: 'Hospitality • Santa Teresa'
  }
];

export default function ProjectsAndSpaces() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <h2>Selected Spaces</h2>
            <p>Where architecture meets bespoke craftsmanship.</p>
          </div>
        </ScrollReveal>
        
        <div className={styles.gallery}>
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={index} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} loading="lazy" className="hover-zoom" / decoding="async">
              </div>
              <div className={styles.meta}>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
