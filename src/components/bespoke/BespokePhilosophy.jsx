import styles from './BespokePhilosophy.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'Bespoke Philosophy',
    title: 'A piece of furniture should not merely fill a space; it should anchor the architecture and elevate the ritual of living.',
    paragraphs: [
      'Our bespoke service is an invitation to collaborate. We transcend standard catalog offerings to design pieces that respond intimately to your environment, your routines, and your aesthetic sensibilities.',
      'Through a consultative process, we merge our deep understanding of Costa Rican hardwoods with your unique vision. Every dimension is tailored. Every finish is intentional. The result is a tactile, monumental object crafted with uncompromising integrity.',
    ],
  },
  es: {
    label: 'Filosofía a Medida',
    title: 'Un mueble no debe simplemente llenar un espacio; debe anclar la arquitectura y elevar el ritual de habitar.',
    paragraphs: [
      'Nuestro servicio a medida es una invitación a colaborar. Trascendemos la oferta estándar de catálogo para diseñar piezas que responden de forma íntima a tu entorno, tus rutinas y tus sensibilidades estéticas.',
      'A través de un proceso consultivo, fusionamos nuestro profundo conocimiento de las maderas costarricenses con tu visión única. Cada dimensión se adapta. Cada acabado es intencional. El resultado es un objeto táctil y monumental, elaborado con una integridad inquebrantable.',
    ],
  },
};

export default function BespokePhilosophy() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.philosophy}>
      <div className={`container`}>
        <div className={styles.textCol}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>

          <div className={styles.editorial}>
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
