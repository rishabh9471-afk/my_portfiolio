import { skills } from "../data/content.js";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <h2>Skills</h2>
          <p className="lede">Product craft and the data chops to back it up.</p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, list]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="skill-tags">
                {list.map((s) => (
                  <span className="pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
