import { motion } from "framer-motion";
import { caseStudies } from "../data/content.js";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function CaseStudy({ cs }) {
  return (
    <motion.article
      className="case"
      id={cs.id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fade}
    >
      <div className="case-meta">
        <span className="case-tag">{cs.tag}</span>
        <div className="case-metric">{cs.metric}</div>
        <div className="case-metric-label">{cs.metricLabel}</div>
        <div className="case-byline">
          {cs.role}
          <br />
          {cs.company} · {cs.timeline}
        </div>
      </div>

      <div className="case-body">
        <h3 className="case-title">{cs.title}</h3>

        <div className="case-block">
          <h4>Context</h4>
          <p>{cs.context}</p>
        </div>

        <div className="case-block">
          <h4>The problem</h4>
          <p>{cs.problem}</p>
        </div>

        <div className="case-block">
          <h4>Approach</h4>
          <ul>
            {cs.approach.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="case-block impact-block">
          <h4>Impact</h4>
          <ul>
            {cs.impact.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="case-tools">
          {cs.tools.map((t) => (
            <span className="pill" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Four problems, worked end to end</h2>
          <p className="lede">
            Each of these shipped in production at Truworth Wellness — from finding the
            bottleneck to owning the number it moved.
          </p>
        </div>
        <div className="case-list">
          {caseStudies.map((cs) => (
            <CaseStudy cs={cs} key={cs.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
