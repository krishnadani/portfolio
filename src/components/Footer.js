import React from "react";

function Footer() {
  return (
    <footer className="py-5 mt-5 border-top" style={{ background: "#F0FDF4" }}>
      <div className="container text-center">

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-3 mb-3">

          <a
            href="https://github.com/krishnadani"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/krishnagdani/"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="mailto:krishnagdani@gmail.com"
            className="footer-icon"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a
            href="https://www.instagram.com/krishnadanii/"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://x.com/krishnadanii"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
            aria-label="X"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>

        </div>

        {/* Copyright */}
        <p className="text-muted mb-0 small">
          © {new Date().getFullYear()} Krishna Dani. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
