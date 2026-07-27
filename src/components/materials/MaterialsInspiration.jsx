import styles from './MaterialsInspiration.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'Contextual Harmony',
    paragraphs: [
      'When placed within a curated architectural interior, our woods do not merely occupy space—they interact with the ambient light, the acoustics, and the temperature of the room.',
      'Whether bathed in the golden hour sun of a Guanacaste coastline or absorbing the soft, diffuse light of an urban apartment, the material responds dynamically to its environment.',
    ],
  },
  es: {
    title: 'Armonía Contextual',
    paragraphs: [
      'Al ubicarse dentro de un interior arquitectónico curado, nuestras maderas no solo ocupan espacio: interactúan con la luz ambiental, la acústica y la temperatura de la sala.',
      'Ya sea bañado por el sol de la hora dorada en la costa de Guanacaste o absorbiendo la luz suave y difusa de un apartamento urbano, el material responde de forma dinámica a su entorno.',
    ],
  },
};

export default function MaterialsInspiration() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.inspiration}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <img
            src="/projects_hero.webp"
            alt="Materials in architectural context"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.textCol}>
          <div className={styles.card}>
            <h2>{c.title}</h2>
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
