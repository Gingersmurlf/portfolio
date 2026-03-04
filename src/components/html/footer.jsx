import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer--container">
      <div className="footer__inner wrapper">
        <div className="footer__brand">
          <p className="footer__text">© {year} Portfolio by Theo</p>
        </div>

        <div className="footer__actions">
          <nav
            className="footer__social"
            aria-label="Theo's social media links"
          >
            <a
              className="footer__social__link"
              href="https://github.com/Gingersmurlf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
            >
              <FaGithub />
            </a>

            <a
              className="footer__social__link"
              href="https://www.linkedin.com/in/theodor-enghoff"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
