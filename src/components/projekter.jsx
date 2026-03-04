import Header from "./html/header";
import Footer from "./html/footer";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiJavascript, SiSass, SiHtml5, SiCss3 } from "react-icons/si";

/**
 * Projekter.jsx
 *
 * Refactored projects page:
 * - Uses a projects array to generate a consistent project card grid
 * - Cards are semantic, fully clickable (anchor wraps content)
 * - External links open in new tab with security attributes
 * - Accessible headings, captions and link labels
 *
 * Update images by placing them in `public/` and referencing with absolute paths like `/newsify-img.png`
 */

const PROJECTS = [
  {
    id: "newsify",
    title: "Newsify",
    subtitle: "Nyhedsapp — New York Times API",
    description:
      "En moderne nyhedsapp, der henter artikler fra New York Times API. Filters, søg og paginering.",
    img: "/newsify-img.png",
    href: "https://www.gingersmurlf.tech/",
    tags: ["React", "API", "Responsivt"],
    icons: [<SiReact key="r" />, <SiJavascript key="js" />],
  },
  {
    id: "react-router-tutorial",
    title: "React Router Tutorial",
    subtitle: "Routing & navigation",
    description:
      "En simpel tutorial der demonstrerer React Router: nested routes, layouts og links.",
    img: "/react-img.jfif",
    href: "https://react-router-tutorial-theodor.vercel.app/",
    tags: ["React", "Routing"],
    icons: [<SiReact key="r2" />, <SiJavascript key="js2" />],
  },
  {
    id: "hifi-horizon",
    title: "Hifi Horizon",
    subtitle: "E-commerce demo",
    description:
      "En butiksside med produkter, filter og produktdetaljer — øvelse i layout og UX for e-commerce.",
    img: "/logo_hifi.svg",
    href: "https://hifi-horizon.vercel.app/",
    tags: ["Design", "Responsivt"],
    icons: [<SiHtml5 key="h" />, <SiCss3 key="c" />, <SiSass key="s" />],
  },
];

/* Small presentational helper for the icon group */
function IconList({ icons = [], base = "icon" }) {
  return (
    <div
      className="project__icons"
      aria-hidden="true"
      style={{ display: "flex", gap: 8 }}
    >
      {icons.map((icon, idx) => {
        // derive a safe name for the icon for use as a key
        const typeName =
          icon?.type?.displayName || icon?.type?.name || `icon-${idx}`;
        return (
          <span
            key={`${base}-${typeName}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: 18,
            }}
          >
            {icon}
          </span>
        );
      })}
    </div>
  );
}

export default function Projekter() {
  return (
    <div className="wrapper">
      <Header />

      <main className="main" id="projekter-main">
        <section className="projects" aria-labelledby="projects-heading">
          <div
            className="projects__header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 12,
            }}
          >
            <div>
              <h2
                id="projects-heading"
                className="main__subtitle"
                style={{ marginBottom: 6 }}
              >
                Mine Projekter
              </h2>
              <p style={{ margin: 0, color: "var(--muted)" }}>
                Eksempler på arbejde og øvelser — klik et kort for at åbne demo.
              </p>
            </div>

            <div>
              <a
                href="/"
                className="btn btn--ghost"
                style={{ fontSize: "0.95rem" }}
                aria-label="Tilbage til forsiden"
              >
                ← Til forsiden
              </a>
            </div>
          </div>

          <div
            className="project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="project-card"
                style={{
                  background: "linear-gradient(180deg,#ffffff,#fbfbff)",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 8px 30px rgba(2,6,23,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Use an anchor for the whole card so it's fully clickable.
                    Keep link accessible with descriptive aria-label. */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                  aria-label={`Åbn projekt ${p.title} i nyt vindue`}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "block",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: 0,
                    }}
                  >
                    <div
                      style={{
                        aspectRatio: "16 / 9",
                        width: "100%",
                        overflow: "hidden",
                        background: "#f6f7fb",
                      }}
                    >
                      {/* If image is an SVG (logo) it will scale; otherwise covers */}
                      <img
                        src={p.img}
                        alt={`${p.title} screenshot`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        padding: "12px 14px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div>
                          <h3 style={{ margin: 0, fontSize: "1.05rem" }}>
                            {p.title}
                          </h3>
                          <p
                            style={{
                              margin: 0,
                              color: "var(--muted)",
                              fontSize: "0.92rem",
                            }}
                          >
                            {p.subtitle}
                          </p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            gap: 8,
                            alignItems: "center",
                          }}
                        >
                          <IconList icons={p.icons} />
                          <FaExternalLinkAlt
                            style={{ color: "var(--muted)", fontSize: 14 }}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <p
                        style={{
                          margin: 0,
                          color: "var(--muted)",
                          fontSize: "0.94rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {p.description}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          marginTop: 6,
                          flexWrap: "wrap",
                        }}
                      >
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: 12,
                              color: "var(--muted)",
                              background: "rgba(6,182,212,0.06)",
                              padding: "4px 8px",
                              borderRadius: 999,
                              fontWeight: 700,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="/kontakt"
              className="btn btn--primary"
              style={{ padding: "0.6rem 1rem" }}
              aria-label="Kontakt for flere projekter"
            >
              Kontakt for flere projekter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
