import styles from './BespokeWorkshop.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    label: 'The Workshop',
    title: 'Where raw nature meets deliberate intention.',
    text: 'Our San José atelier is a sanctuary of craftsmanship. Here, modern precision tools work in harmony with traditional hand tools. Every bespoke piece passes through the hands of master artisans who understand the unique temperament of tropical hardwoods.',
    details: [
      { title: 'Hand-Rubbed Finishes', text: 'We use natural oils that penetrate deep into the grain, offering protection without sacrificing the tactile warmth of the wood.' },
      { title: 'Architectural Joinery', text: 'Exposed tenons and precise dovetails are not just structural necessities; they are celebrated design elements.' },
    ],
  },
  es: {
    label: 'El Taller',
    title: 'Donde la naturaleza cruda se encuentra con la intención deliberada.',
    text: 'Nuestro taller en San José es un santuario de la artesanía. Aquí, las herramientas modernas de precisión trabajan en armonía con las herramientas manuales tradicionales. Cada pieza a medida pasa por las manos de maestros artesanos que comprenden el temperamento único de las maderas tropicales.',
    details: [
      { title: 'Acabados Pulidos a Mano', text: 'Usamos aceites naturales que penetran profundamente en la veta, ofreciendo protección sin sacrificar la calidez táctil de la madera.' },
      { title: 'Ensamblaje Arquitectónico', text: 'Las espigas expuestas y las colas de milano precisas no son solo necesidades estructurales; son elementos de diseño celebrados.' },
    ],
  },
};

export default function BespokeWorkshop() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.workshop}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.textCol}>
          <span className={styles.label}>{c.label}</span>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
          <div className={styles.details}>
            {c.details.map((d, i) => (
              <div key={i} className={styles.detail}>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageWrapperMain}>
            <img src="/photo3.webp" alt="Master artisan at work" loading="lazy" decoding="async" />
          </div>
          <div className={styles.imageWrapperSub}>
            <img src="/workshop_process_1779816120385.webp" alt="Woodworking details" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
