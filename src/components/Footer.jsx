import { profile } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer section" id="contact">
      <div className="wrap">
        <div className="footer-inner">
          <h2>Let's talk about what you're building.</h2>
          <div className="footer-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{profile.name} — {profile.role}, {profile.location}</span>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
