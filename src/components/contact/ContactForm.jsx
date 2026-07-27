import { useState } from 'react';
import styles from './ContactForm.module.css';
import ScrollReveal from '../ScrollReveal';
import { useLang } from '../../i18n/LanguageContext';

const COPY = {
  en: {
    heading: "Let's discuss your vision.",
    intro: "Whether you're an architect seeking bespoke elements for a hospitality project, or a private client looking for that perfect centerpiece, our studio is ready to collaborate.",
    directInquiry: 'Direct Inquiry',
    studioLine: 'Studio Line',
    whatsapp: 'Message on WhatsApp',
    name: 'Full Name *', namePlaceholder: 'Your name',
    email: 'Email Address *', emailPlaceholder: 'your@email.com',
    phone: 'Phone Number', phonePlaceholder: '+1 (555) 000-0000',
    type: 'Project Type *', typePlaceholder: 'Select project type',
    options: {
      residential: 'Residential / Private',
      commercial: 'Commercial / Hospitality',
      architect: 'Architectural Collaboration',
      other: 'Other Inquiry',
    },
    message: 'Message *', messagePlaceholder: 'Tell us about your project, materials, or timeline...',
    submit: 'Send Inquiry',
    loading: 'Sending your inquiry securely...',
    successTitle: 'Thank You.',
    successText: 'Your inquiry has been received by our studio. We will review your project details and contact you shortly.',
    submitAnother: 'Submit Another',
    errorTitle: 'Connection Error',
    errorText: "We couldn't process your request at this moment. Please try again or contact us directly via WhatsApp.",
    tryAgain: 'Try Again',
  },
  es: {
    heading: 'Conversemos sobre su visión.',
    intro: 'Ya sea que usted sea un arquitecto en busca de elementos a medida para un proyecto de hotelería, o un cliente particular buscando esa pieza central perfecta, nuestro estudio está listo para colaborar.',
    directInquiry: 'Consulta Directa',
    studioLine: 'Línea del Estudio',
    whatsapp: 'Escribir por WhatsApp',
    name: 'Nombre Completo *', namePlaceholder: 'Su nombre',
    email: 'Correo Electrónico *', emailPlaceholder: 'su@correo.com',
    phone: 'Número de Teléfono', phonePlaceholder: '+506 0000 0000',
    type: 'Tipo de Proyecto *', typePlaceholder: 'Seleccione el tipo de proyecto',
    options: {
      residential: 'Residencial / Privado',
      commercial: 'Comercial / Hotelería',
      architect: 'Colaboración Arquitectónica',
      other: 'Otra Consulta',
    },
    message: 'Mensaje *', messagePlaceholder: 'Cuéntenos sobre su proyecto, materiales o plazos...',
    submit: 'Enviar Consulta',
    loading: 'Enviando su consulta de forma segura...',
    successTitle: 'Gracias.',
    successText: 'Su consulta ha sido recibida por nuestro estudio. Revisaremos los detalles de su proyecto y le contactaremos en breve.',
    submitAnother: 'Enviar Otra',
    errorTitle: 'Error de Conexión',
    errorText: 'No pudimos procesar su solicitud en este momento. Inténtelo de nuevo o contáctenos directamente por WhatsApp.',
    tryAgain: 'Intentar de Nuevo',
  },
};

export default function ContactForm() {
  const { lang } = useLang();
  const c = COPY[lang];
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', type: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={`container ${styles.layout}`}>

        {/* Left Column */}
        <ScrollReveal className={styles.infoColumn}>
          <h2>{c.heading}</h2>
          <p>{c.intro}</p>

          <div className={styles.contactMethods}>
            <div className={styles.method}>
              <span className={styles.methodLabel}>{c.directInquiry}</span>
              <a href="mailto:info@albiziawoods.com" className={styles.methodLink}>info@albiziawoods.com</a>
            </div>

            <div className={styles.method}>
              <span className={styles.methodLabel}>{c.studioLine}</span>
              <a href="tel:+50672131441" className={styles.methodLink}>+506 7213 1441</a>
            </div>

            <a href="https://wa.me/50672131441" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              {c.whatsapp}
            </a>
          </div>
        </ScrollReveal>

        {/* Right Column (Form) */}
        <ScrollReveal className={styles.formColumn} delay={0.2}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">{c.name}</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className={styles.minimalInput} placeholder={c.namePlaceholder} required disabled={status === 'loading'} />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">{c.email}</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className={styles.minimalInput} placeholder={c.emailPlaceholder} required disabled={status === 'loading'} />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">{c.phone}</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className={styles.minimalInput} placeholder={c.phonePlaceholder} disabled={status === 'loading'} />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="type">{c.type}</label>
              <select id="type" value={formData.type} onChange={handleChange} className={`${styles.minimalInput} ${styles.minimalSelect}`} required disabled={status === 'loading'}>
                <option value="" disabled>{c.typePlaceholder}</option>
                <option value="residential">{c.options.residential}</option>
                <option value="commercial">{c.options.commercial}</option>
                <option value="architect">{c.options.architect}</option>
                <option value="other">{c.options.other}</option>
              </select>
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">{c.message}</label>
              <textarea id="message" value={formData.message} onChange={handleChange} className={styles.minimalInput} placeholder={c.messagePlaceholder} required disabled={status === 'loading'}></textarea>
              <div className={styles.inputFocusLine}></div>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              {c.submit}
            </button>
          </form>

          {/* Loading State */}
          <div className={`${styles.stateOverlay} ${status === 'loading' ? styles.visible : ''}`}>
            <div className={styles.loader}></div>
            <p>{c.loading}</p>
          </div>

          {/* Success State */}
          <div className={`${styles.stateOverlay} ${status === 'success' ? styles.visible : ''}`}>
            <h3>{c.successTitle}</h3>
            <p>{c.successText}</p>
            <button type="button" className={styles.resetBtn} onClick={() => setStatus('idle')}>{c.submitAnother}</button>
          </div>

          {/* Error State */}
          <div className={`${styles.stateOverlay} ${status === 'error' ? styles.visible : ''}`}>
            <h3 className={styles.errorText}>{c.errorTitle}</h3>
            <p>{c.errorText}</p>
            <button type="button" className={styles.resetBtn} onClick={() => setStatus('idle')}>{c.tryAgain}</button>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
