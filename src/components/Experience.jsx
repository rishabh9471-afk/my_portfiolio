import { motion } from "framer-motion";
import { experience, education } from "../data/content.js";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <h2>Experience</h2>
          <p className="lede">Two years, two levels, one product org.</p>
        </div>

        {experience.map((e) => (
          <motion.div
            className="exp-item"
            key={e.role + e.period}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={fade}
          >
            <div className="exp-period">{e.period}</div>
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">
                {e.company} — {e.location}
              </div>
              <p className="exp-summary">{e.summary}</p>
              <ul className="exp-highlights">
                {e.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        <div className="exp-item">
          <div className="exp-period">{education.period}</div>
          <div>
            <div className="exp-role">{education.degree}</div>
            <div className="exp-company">{education.school}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
