import styles from './DesignProcess.module.css';

const STEPS = [
  { num: "01", title: "Client Request", subtitle: "Solicitud del cliente", team: "Administrative Team" },
  { num: "02", title: "Site Visit & Design Advisory", subtitle: "Visita y asesoría de diseño", team: "Design Team" },
  { num: "03", title: "Quotation", subtitle: "Cotización", team: "Administrative Team" },
  { num: "04", title: "Manufacturing Plans", subtitle: "Planos de fabricación", team: "Design Team" },
  { num: "05", title: "Procurement", subtitle: "Gestión de compras", team: "Administrative Team" },
  { num: "06", title: "Fabrication", subtitle: "Fabricación", team: "Woodworking Team" },
  { num: "07", title: "Finishing", subtitle: "Acabados", team: "Finishing Team" },
  { num: "08", title: "Review, Assembly & Packaging", subtitle: "Revisión, armado y embalaje", team: "Design & Woodworking Teams" },
  { num: "09", title: "Delivery & Installation", subtitle: "Entrega / instalación", team: "Woodworking & Finishing Teams" }
];

export default function DesignProcess() {
  return (
    <section className={styles.processSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Our Methodology</span>
          <h2>The Design & Fabrication Process.</h2>
          <p>A meticulous, nine-step journey from the initial vision to the final installation.</p>
        </div>
        
        <div className={styles.timeline}>
          {STEPS.map((step, index) => (
            <div key={index} className={styles.circleStep}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3>{step.title}</h3>
              <span className={styles.esTitle}>{step.subtitle}</span>
              <span className={styles.team}>{step.team}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
