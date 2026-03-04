import { NavLink } from "react-router";

/**
 * Accessible site header with NavLink-based navigation and improved layout.
 *
 * Notes:
 * - Uses semantic <header> and <nav> elements and an unordered list for links.
 * - Uses `NavLink` so active links receive an `is-active` class for styling.
 * - Adds `aria-label` on the nav landmark and a visually-hidden span for the logo text.
 * - Adds `end` to the home NavLink so it only matches the exact path.
 *
 * Update your SCSS to style:
 * - .header, .header__brand, .header__nav, .header__nav__list, .header__nav__link
 * - .header__nav__link.is-active, .visually-hidden, focus-visible styles
 */

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper header__inner">
        <NavLink
          to="/"
          className="header__brand"
          end
          aria-label="Go to homepage"
        >
          {/* Use the project root favicon/logo if available */}
          <img
            src="/T-logo.png"
            alt=""
            className="header__brand__logo"
            aria-hidden="true"
          />
          <span className="visually-hidden">Theo — Portfolio</span>
        </NavLink>

        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav__list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `header__nav__link ${isActive ? "is-active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projekter"
                className={({ isActive }) =>
                  `header__nav__link ${isActive ? "is-active" : ""}`
                }
              >
                Projekter
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/kontakt"
                className={({ isActive }) =>
                  `header__nav__link ${isActive ? "is-active" : ""}`
                }
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
