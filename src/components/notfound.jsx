import { Link } from "react-router";
import Header from "./html/header";
import Footer from "./html/footer";

export default function NotFound() {
  return (
    <div className="wrapper">
      <Header />
      <main className="notfound" aria-labelledby="notfound-title">
        <section className="notfound__content">
          <div className="notfound__art" aria-hidden="true">
            {/* Simple inline SVG illustration (decorative) */}
            <svg
              width="220"
              height="140"
              viewBox="0 0 220 140"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <rect width="220" height="140" rx="12" fill="#f3f4f6" />
              <g transform="translate(40,28)" fill="#9ca3af">
                <circle cx="40" cy="40" r="36" fill="#fff" stroke="#e5e7eb" />
                <path
                  d="M60 60 L88 88"
                  stroke="#9ca3af"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle cx="40" cy="40" r="6" fill="#9ca3af" />
              </g>
            </svg>
          </div>

          <div className="notfound__text">
            <h1 id="notfound-title" className="notfound__title">
              404 — Side ikke fundet
            </h1>
            <p className="notfound__description">
              Den side du leder efter eksisterer ikke (eller er flyttet). Prøv
              en af følgende muligheder:
            </p>

            <nav className="notfound__actions" aria-label="Not found actions">
              <Link
                to="/"
                className="notfound__link btn btn--primary"
                aria-label="Gå til forsiden"
              >
                Gå til forsiden
              </Link>

              <Link
                to="/projekter"
                className="notfound__link btn"
                aria-label="Se projekter"
              >
                Se projekter
              </Link>
            </nav>

            <p className="notfound__hint">
              Hvis du mener dette er en fejl, så kontakt mig via kontakt-siden.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
