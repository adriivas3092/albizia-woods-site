import styles from './BespokeConsultation.module.css';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    title: 'Initiate a Dialogue.',
    text: 'Commissioning a bespoke piece from Albizia Woods is a highly personal experience. We invite you to share your vision, architectural plans, or initial concepts. Our design atelier will respond to schedule a private consultation.',
    name: 'Name', namePlaceholder: 'How shall we address you?',
    email: 'Email', emailPlaceholder: 'Your direct contact',
    scope: 'Project Scope', scopePlaceholder: 'Select an area of focus...',
    options: {
      dining: 'Architectural Dining Table',
      living: 'Living & Lounge Furnishings',
      storage: 'Custom Cabinetry & Storage',
      full: 'Comprehensive Space Curation',
      other: 'Other Unique Commission',
    },
    vision: 'Vision & Dimensions',
    visionPlaceholder: 'Briefly describe the space, intended materials, and approximate dimensions...',
    submit: 'Request Consultation',
  },
  es: {
    title: 'Inicie un Diálogo.',
    text: 'Encargar una pieza a medida a Albizia Woods es una experiencia profundamente personal. Te invitamos a compartir tu visión, planos arquitectónicos o conceptos iniciales. Nuestro taller de diseño te responderá para agendar una consulta privada.',
    name: 'Nombre', namePlaceholder: '¿Cómo te llamás?',
    email: 'Correo', emailPlaceholder: 'Tu contacto directo',
    scope: 'Alcance del Proyecto', scopePlaceholder: 'Seleccioná un área de enfoque...',
    options: {
      dining: 'Mesa de Comedor Arquitectónica',
      living: 'Mobiliario de Sala y Estar',
      storage: 'Ebanistería y Almacenamiento a Medida',
      full: 'Curaduría Integral del Espacio',
      other: 'Otro Encargo Único',
    },
    vision: 'Visión y Dimensiones',
    visionPlaceholder: 'Describí brevemente el espacio, los materiales deseados y las dimensiones aproximadas...',
    submit: 'Solicitar Consulta',
  },
};

export default function BespokeConsultation() {
  const { lang } = useLang();
  const c = COPY[lang];

  return (
    <section className={styles.consultation}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{c.name}</label>
              <input type="text" id="name" placeholder={c.namePlaceholder} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{c.email}</label>
              <input type="email" id="email" placeholder={c.emailPlaceholder} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="project">{c.scope}</label>
              <select id="project">
                <option value="">{c.scopePlaceholder}</option>
                <option value="dining">{c.options.dining}</option>
                <option value="living">{c.options.living}</option>
                <option value="storage">{c.options.storage}</option>
                <option value="full">{c.options.full}</option>
                <option value="other">{c.options.other}</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="details">{c.vision}</label>
              <textarea id="details" rows="4" placeholder={c.visionPlaceholder}></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>{c.submit}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
