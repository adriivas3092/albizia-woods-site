import { useState } from 'react';
import styles from './ContactForm.module.css';
import ScrollReveal from '../ScrollReveal';

export default function ContactForm() {
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
          <h2>Let's discuss your vision.</h2>
          <p>
            Whether you're an architect seeking bespoke elements for a hospitality project, or a private client looking for that perfect centerpiece, our studio is ready to collaborate.
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.method}>
              <span className={styles.methodLabel}>Direct Inquiry</span>
              <a href="mailto:studio@albiziawoods.com" className={styles.methodLink}>studio@albiziawoods.com</a>
            </div>
            
            <div className={styles.method}>
              <span className={styles.methodLabel}>Studio Line</span>
              <a href="tel:+50622223333" className={styles.methodLink}>+506 2222 3333</a>
            </div>

            <a href="https://wa.me/50688889999" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>
        </ScrollReveal>

        {/* Right Column (Form) */}
        <ScrollReveal className={styles.formColumn} delay={0.2}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className={styles.minimalInput} placeholder="Your name" required disabled={status === 'loading'} />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className={styles.minimalInput} placeholder="your@email.com" required disabled={status === 'loading'} />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className={styles.minimalInput} placeholder="+1 (555) 000-0000" disabled={status === 'loading'} />
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="type">Project Type *</label>
              <select id="type" value={formData.type} onChange={handleChange} className={`${styles.minimalInput} ${styles.minimalSelect}`} required disabled={status === 'loading'}>
                <option value="" disabled>Select project type</option>
                <option value="residential">Residential / Private</option>
                <option value="commercial">Commercial / Hospitality</option>
                <option value="architect">Architectural Collaboration</option>
                <option value="other">Other Inquiry</option>
              </select>
              <div className={styles.inputFocusLine}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message *</label>
              <textarea id="message" value={formData.message} onChange={handleChange} className={styles.minimalInput} placeholder="Tell us about your project, materials, or timeline..." required disabled={status === 'loading'}></textarea>
              <div className={styles.inputFocusLine}></div>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              Send Inquiry
            </button>
          </form>

          {/* Loading State */}
          <div className={`${styles.stateOverlay} ${status === 'loading' ? styles.visible : ''}`}>
            <div className={styles.loader}></div>
            <p>Sending your inquiry securely...</p>
          </div>

          {/* Success State */}
          <div className={`${styles.stateOverlay} ${status === 'success' ? styles.visible : ''}`}>
            <h3>Thank You.</h3>
            <p>Your inquiry has been received by our studio. We will review your project details and contact you shortly.</p>
            <button type="button" className={styles.resetBtn} onClick={() => setStatus('idle')}>Submit Another</button>
          </div>

          {/* Error State */}
          <div className={`${styles.stateOverlay} ${status === 'error' ? styles.visible : ''}`}>
            <h3 className={styles.errorText}>Connection Error</h3>
            <p>We couldn't process your request at this moment. Please try again or contact us directly via WhatsApp.</p>
            <button type="button" className={styles.resetBtn} onClick={() => setStatus('idle')}>Try Again</button>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
