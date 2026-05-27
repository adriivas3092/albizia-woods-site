import styles from './BrandValues.module.css';

export default function BrandValues() {
  const values = [
    { title: "Passion", text: "A deep-seated love for the craft, driving us to perfect every joint and polish." },
    { title: "Integrity", text: "Honoring the material. We use sustainable practices to respect the Costa Rican environment." },
    { title: "Belonging", text: "Creating pieces that don't just fill a room, but belong there, grounding the architecture." },
    { title: "Learning", text: "Continuous mastery. We are always studying new techniques and embracing the evolution of design." }
  ];

  return (
    <section className={styles.values}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.header}>
          <h2>Core Values</h2>
        </div>
        <div className={styles.grid}>
          {values.map((val, idx) => (
            <div key={idx} className={styles.card}>
              <span>0{idx + 1}</span>
              <h3>{val.title}</h3>
              <p>{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
