import styles from './FeaturedCollections.module.css';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const COLLECTIONS = [
  {
    image: '/Proyectos/photo1.jpg',
    title: 'The Nosara Series',
    desc: 'Low-slung profiles and tactile surfaces, inspired by the dry tropics.'
  },
  {
    image: '/Proyectos/photo2.jpg',
    title: 'San José Modernism',
    desc: 'Architectural lines and refined joinery for the urban sanctuary.'
  }
];

export default function FeaturedCollections() {
  return (
    <section className={styles.collections}>
      <div className={`container ${styles.grid}`}>
        <ScrollReveal className={styles.textCol}>
          <h2>Curated Collections.</h2>
          <p className={styles.subtitle}>
            Explore our signature pieces, designed to anchor living spaces with organic presence and architectural intent.
          </p>
          <Link to="/collections" className={styles.link}>View Collections</Link>
        </ScrollReveal>
        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
