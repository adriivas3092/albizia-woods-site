import styles from './BespokeConsultation.module.css';

export default function BespokeConsultation() {
  return (
    <section className={styles.consultation}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <h2>Initiate a Dialogue.</h2>
          <p>
            Commissioning a bespoke piece from Albizia Woods is a highly personal experience. We invite you to share your vision, architectural plans, or initial concepts. Our design atelier will respond to schedule a private consultation.
          </p>
        </div>
        
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="How shall we address you?" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your direct contact" />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="project">Project Scope</label>
              <select id="project">
                <option value="">Select an area of focus...</option>
                <option value="dining">Architectural Dining Table</option>
                <option value="living">Living & Lounge Furnishings</option>
                <option value="storage">Custom Cabinetry & Storage</option>
                <option value="full">Comprehensive Space Curation</option>
                <option value="other">Other Unique Commission</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="details">Vision & Dimensions</label>
              <textarea id="details" rows="4" placeholder="Briefly describe the space, intended materials, and approximate dimensions..."></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>Request Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
}
