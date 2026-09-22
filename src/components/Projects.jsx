import { motion } from "framer-motion";
import { projects } from "../data/content.js";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function ProjectCard({ p }) {
  return (
    <motion.div
      className={`project-card ${p.featured ? "featured" : ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fade}
    >
      <div className="project-head">
        <div>
          {p.featured && (
            <div className="project-live-badge">
              <span className="dot" />
              Live now
            </div>
          )}
          <h3 className="project-name">{p.name}</h3>
          <div className="project-tagline">{p.tagline}</div>
        </div>
        <div className="project-links">
          <a className="btn btn-primary" href={p.liveUrl} target="_blank" rel="noreferrer">
            View live
          </a>
          <a className="btn btn-ghost" href={p.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <p className="project-desc">{p.description}</p>

      <ul className="project-impact">
        {p.impact.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>

      <div className="project-skills">
        {p.skills.map((s) => (
          <span className="pill" key={s}>
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Live projects</h2>
          <p className="lede">Shipped and deployed, not just prototyped in a deck.</p>
        </div>
        {projects.map((p) => (
          <ProjectCard p={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}
