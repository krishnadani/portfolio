import React from "react";

function Footer() {
  return (
    <footer
      className="py-3 text-center"
      style={{ background: "#F0FDF4" }}
    >
      <p className="mb-1 fw-semibold">
        © {new Date().getFullYear()} Krish | Portfolio
      </p>

      <small className="text-muted">
        Built with React • Deployed on Vercel
      </small>
    </footer>
  );
}

export default Footer;
