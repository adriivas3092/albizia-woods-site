import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <section className={styles.formSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>Inquiry</h2>
          <p>Please provide details about your project, and a member of our design team will reach out to schedule a consultation.</p>
        </div>
        
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Jane Doe" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="jane@example.com" required />
            </div>
          </div>
          
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="clientType">I am a...</label>
              <select id="clientType" defaultValue="">
                <option value="" disabled>Select your profile</option>
                <option value="homeowner">Homeowner / Private Client</option>
                <option value="architect">Architect</option>
                <option value="designer">Interior Designer</option>
                <option value="commercial">Commercial / Hospitality</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="interest">Primary Interest</label>
              <select id="interest" defaultValue="">
                <option value="" disabled>Select an area</option>
                <option value="dining">Dining & Entertaining</option>
                <option value="living">Living Spaces</option>
                <option value="bedroom">Bedroom</option>
                <option value="custom">Full Custom Project</option>
              </select>
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="details">Project Details</label>
            <textarea 
              id="details" 
              rows="4" 
              placeholder="Tell us about your space, dimensions, preferred materials, or timeline..."
            ></textarea>
          </div>
          
          <div className={styles.submitRow}>
            <button type="submit" className={styles.submitBtn}>Submit Inquiry</button>
          </div>
        </form>
      </div>
    </section>
  );
}
