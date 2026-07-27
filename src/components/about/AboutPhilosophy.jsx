import styles from './AboutPhilosophy.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Design Philosophy',
    title: 'Aesthetic Functionality.',
    text: 'We strip away the unnecessary. Our approach to design centers on the belief that a piece of furniture should not only serve a purpose but elevate the space it inhabits. We balance the raw, organic beauty of the wood with clean, architectural lines.',
  },
  es: {
    label: 'Filosofía de Diseño',
    title: 'Funcionalidad Estética.',
    text: 'Eliminamos lo innecesario. Nuestro enfoque de diseño se centra en la convicción de que un mueble no solo debe cumplir una función, sino elevar el espacio que habita. Equilibramos la belleza cruda y orgánica de la madera con líneas limpias y arquitectónicas.',
  },
};

export default function AboutPhilosophy() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.philosophy}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.visualContent}>
          <div className={styles.textureBg} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
        </div>
        <div className={styles.textContent}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>
      </div>
    </section>
  );
}
