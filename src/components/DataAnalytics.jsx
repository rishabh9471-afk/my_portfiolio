import { motion } from "framer-motion";
import { dataWork } from "../data/content.js";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function DataAnalytics() {
  return (
    <section className="section data-section" id="data">
      <div className="wrap">
        <div className="section-head">
          <h2>I write my own SQL</h2>
          <p className="lede">
            Most PM portfolios stop at "data-driven." Here's the actual query-to-dashboard
            work behind that claim.
          </p>
        </div>

        <motion.div
          className="data-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={fade}
        >
          <div>
            <p>{dataWork.intro}</p>
            <ul className="data-points">
              {dataWork.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>

          <div className="data-stats">
            {dataWork.stats.map((s) => (
              <div className="data-stat" key={s.label}>
                <span className="num">{s.value}</span>
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
