import styles from './MissionVision.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    missionLabel: 'Our Mission',
    mission: 'To craft heirloom furniture that anchors the spaces where life unfolds, honoring Costa Rican materials with absolute integrity.',
    visionLabel: 'Our Vision',
    vision: 'To be a globally recognized studio that defines the standard for tropical modern luxury and artisanal woodworking.',
  },
  es: {
    missionLabel: 'Nuestra Misión',
    mission: 'Crear mobiliario de herencia que ancle los espacios donde transcurre la vida, honrando los materiales costarricenses con absoluta integridad.',
    visionLabel: 'Nuestra Visión',
    vision: 'Ser un estudio reconocido a nivel mundial que defina el estándar del lujo tropical moderno y la ebanistería artesanal.',
  },
};

export default function MissionVision() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.mission}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.statement}>
          <span className={styles.label}>{c.missionLabel}</span>
          <h2>{c.mission}</h2>
        </div>
        <div className={styles.statement}>
          <span className={styles.label}>{c.visionLabel}</span>
          <h2>{c.vision}</h2>
        </div>
      </div>
    </section>
  );
}
