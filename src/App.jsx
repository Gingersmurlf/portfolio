import { Link } from "react-router";
import Header from "./components/html/header.jsx";
import Footer from "./components/html/footer.jsx";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

/**
 * App.jsx
 *
 * - Adds a hero section with a short intro and two CTA buttons (View projects, Contact me)
 * - Improves the skills layout into cards with icons and short descriptions
 * - Keeps the existing header/footer components
 *
 * Note: Styling is intentionally class-based so your SCSS can target and style
 * the new sections. You may want to add rules for:
 * - .hero, .hero__content, .hero__cta
 * - .skills, .skills__grid, .skill-card, .skill-card__icon, .skill-card__name
 */

export default function App() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 color="#E34C26" size={36} />,
      desc: "Semantic markup, accessibility-friendly structure",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt color="#264de4" size={36} />,
      desc: "Modern layout (Flexbox & Grid), animations and responsiveness",
    },
    {
      name: "SCSS",
      icon: <FaSass color="#c8639b" size={36} />,
      desc: "Modular styles, variables and nesting for maintainability",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript style={{ color: "#f7df1e" }} size={36} />,
      desc: "ES6+, DOM, async patterns and tooling",
    },
    {
      name: "React",
      icon: <FaReact color="#61DBFB" size={36} />,
      desc: "Component-driven UIs, hooks and client routing",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs color="#43853d" size={36} />,
      desc: "Building APIs and small backends (Express)",
    },
  ];

  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        {/* HERO */}
        <section className="hero" aria-label="Hero introduction">
          <div className="hero__content">
            <h1 className="hero__title">Hej — jeg er Theo</h1>
            <p className="hero__subtitle">
              Frontend developer in training. I build accessible, responsive
              interfaces with modern JavaScript and React.
            </p>

            <div className="hero__cta">
              <Link
                to="/projekter"
                className="btn btn--primary"
                aria-label="Se projekter"
              >
                Se projekter
              </Link>
              <Link
                to="/kontakt"
                className="btn btn--outline"
                aria-label="Kontakt mig"
              >
                Kontakt mig
              </Link>
            </div>

            <p className="hero__hint">
              Tip: Try the "Projekter" page to see live demos and links.
            </p>
          </div>
          <div className="hero__visual" aria-hidden="true">
            {/* Decorative shape / image area — style with CSS */}
            <div className="hero__circle" />
          </div>
        </section>

        {/* SKILLS */}
        <section className="main__kompetencer" aria-label="Skills">
          <h2 className="main__subtitle">Skills</h2>

          <div className="skills__grid">
            {skills.map((s) => (
              <article key={s.name} className="skill-card">
                <div className="skill-card__icon" aria-hidden="true">
                  {s.icon}
                </div>
                <h3 className="skill-card__name">{s.name}</h3>
                <p className="skill-card__desc">{s.desc}</p>

                {/* Lightweight visual indicator — can be styled with SCSS */}
                <div className="skill-card__bar" aria-hidden="true">
                  <span
                    className={`skill-card__level skill-card__level--${s.name.toLowerCase()}`}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="main__cta">
            <Link
              to="/projekter"
              className="btn btn--secondary"
              aria-label="Se alle projekter"
            >
              Gå til projekter
            </Link>
            <a
              href="mailto:theodorenghoff@gmail.com"
              className="btn btn--ghost"
              aria-label="Send email"
            >
              Send en mail
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
