import React, { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // ✅ Close mobile menu after click
  const closeMenu = () => {
    const nav = document.getElementById("portfolioNav");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  // ✅ Scroll spy + navbar style
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ["about", "skills", "projects", "coding", "contact"];

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top >= 0 && top < 200) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-glass shadow-sm" : "bg-white"
      }`}
    >
      <div className="container">

        {/* Brand */}
        <a className="navbar-brand fw-bold text-success" href="#home">
          Krishna Dani
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ms-auto gap-3 text-center">

            <li className="nav-item">
              <a
                className={`nav-link fw-semibold ${
                  active === "about" ? "text-success border-bottom border-success" : ""
                }`}
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link fw-semibold ${
                  active === "skills" ? "text-success border-bottom border-success" : ""
                }`}
                href="#skills"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link fw-semibold ${
                  active === "projects" ? "text-success border-bottom border-success" : ""
                }`}
                href="#projects"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link fw-semibold ${
                  active === "coding" ? "text-success border-bottom border-success" : ""
                }`}
                href="#coding"
                onClick={closeMenu}
              >
                Coding
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link fw-semibold ${
                  active === "contact" ? "text-success border-bottom border-success" : ""
                }`}
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
