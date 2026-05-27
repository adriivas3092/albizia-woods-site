import styles from './BespokeProcess.module.css';

const STEPS = [
  { num: '01', title: 'Consultation', desc: 'An initial dialogue to understand the scale, intent, and architectural context of your project.' },
  { num: '02', title: 'Concept & Inspiration', desc: 'Translating emotional and spatial requirements into preliminary sketches and conceptual directions.' },
  { num: '03', title: 'Material Selection', desc: 'Curating specific timber slabs and complementary finishes that align with the design narrative.' },
  { num: '04', title: 'Design Development', desc: 'Refining the concept through detailed 3D modeling and technical shop drawings for your approval.' },
  { num: '05', title: 'Craftsmanship', desc: 'The physical manifestation. Slow, deliberate fabrication by our master woodworkers.' },
  { num: '06', title: 'Delivery & Installation', desc: 'White-glove placement within your space, ensuring perfect integration.' }
];

export default function BespokeProcess() {
  return (
    <section className={styles.process}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2>The Design Process</h2>
        </div>
        
        <div className={styles.timeline}>
          {STEPS.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.num}>{step.num}</div>
              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
