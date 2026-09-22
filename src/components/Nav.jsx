import { profile } from "../data/content.js";

const LINKS = [
  { href: "#work", label: "Case studies" },
  { href: "#experience", label: "Experience" },
  { href: "#data", label: "Data" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="nav-mark" href="#top">
          Rishabh Sharma
        </a>
        <nav>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="nav-cta" href={profile.resumeFile} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
}
