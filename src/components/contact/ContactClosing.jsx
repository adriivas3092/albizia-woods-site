import styles from './ContactClosing.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: { title: 'We look forward to building your legacy.' },
  es: { title: 'Esperamos construir tu legado.' },
};

export default function ContactClosing() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.closing}>
      <div className={styles.textureOverlay} style={{ backgroundImage: 'url(/texture.webp)' }}></div>
      <div className={`container ${styles.content}`}>
        <h2>{c.title}</h2>
      </div>
    </section>
  );
}
