import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

function Contact() {
  return (
    <AnimatedSection>
      <section className="py-5 bg-white" id="contact">
        <div className="container text-center">

          {/* Heading */}
          <motion.h2
            className="fw-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="text-muted mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Open for internships, collaborations, and entry-level opportunities.
          </motion.p>

          {/* Contact Cards */}
          <motion.div
            className="row justify-content-center g-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Email */}
            <div className="col-md-4 col-sm-6">
              <div className="border rounded-4 p-3 h-100 shadow-sm">
                <i className="fa-solid fa-envelope text-success fs-4 mb-2"></i>
                <h6 className="fw-bold mb-1">Email</h6>
                <a
                  href="mailto:krishnagdani@gmail.com"
                  className="text-decoration-none text-muted"
                >
                  krishnagdani@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4 col-sm-6">
              <div className="border rounded-4 p-3 h-100 shadow-sm">
                <i className="fa-solid fa-phone text-success fs-4 mb-2"></i>
                <h6 className="fw-bold mb-1">Phone</h6>
                <a
                  href="tel:+917411129094"
                  className="text-decoration-none text-muted"
                >
                  +91 74111 29094
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="d-flex justify-content-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/krishnadani"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark px-4"
            >
              <i className="fa-brands fa-github me-2"></i> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/krishnagdani/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary px-4"
            >
              <i className="fa-brands fa-linkedin me-2"></i> LinkedIn
            </a>
          </motion.div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Contact;
