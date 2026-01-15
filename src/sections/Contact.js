import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

function Contact() {
  return (
    <AnimatedSection>
    <section className="text-center py-5 bg-white" id="contact">
        <h2 className="fw-bold">Get In Touch</h2>
        <p className="text-muted">
          Open for internships, collaboration, and exciting opportunities.
        </p>

        <p><b>Email:</b> krishnagdani@gmail.com</p>
        <p><b>Phone:</b> +91-7411129094</p>

        <motion.div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://github.com/krishnadani" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/krishnagdani/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </motion.div>
      </section>
    </AnimatedSection>
  );
}

export default Contact;
