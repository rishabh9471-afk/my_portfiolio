import { certifications } from "../data/content.js";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="wrap">
        <div className="section-head">
          <h2>Certifications</h2>
          <p className="lede">Formal credentials alongside the on-the-job track record.</p>
        </div>

        {certifications.length === 0 ? (
          <div className="empty-state">
            <p>
              Certifications will appear here — add them in{" "}
              <code>src/data/content.js</code> under <code>certifications</code>.
            </p>
          </div>
        ) : (
          <div className="cert-grid">
            {certifications.map((c) => (
              <a
                className="cert-card"
                href={c.url || "#"}
                target={c.url ? "_blank" : undefined}
                rel="noreferrer"
                key={c.name}
                style={{ textDecoration: "none" }}
              >
                <div className="cert-name">{c.name}</div>
                <div className="cert-meta">
                  {c.issuer} · {c.date}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
