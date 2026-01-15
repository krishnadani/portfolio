import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">

        {/* Heading */}
        <motion.h2
          className="fw-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Short Intro */}
        <motion.p
          className="text-muted text-center mx-auto mb-4"
          style={{ maxWidth: "760px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Computer Science & Design Engineering undergraduate passionate about
          building scalable, user-friendly web applications using modern
          technologies.
        </motion.p>

        {/* INFO CARDS */}
        <motion.div
          className="row justify-content-center g-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="col-md-3 col-sm-6">
            <div className="border rounded-4 p-3 text-center h-100 shadow-sm">
              <i className="fa-solid fa-graduation-cap text-success fs-4 mb-2"></i>
              <h6 className="fw-bold mb-1">College</h6>
              <p className="text-muted small mb-0">MVJ College of Engineering</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="border rounded-4 p-3 text-center h-100 shadow-sm">
              <i className="fa-solid fa-chart-line text-success fs-4 mb-2"></i>
              <h6 className="fw-bold mb-1">CGPA</h6>
              <p className="text-muted small mb-0">8.47</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="border rounded-4 p-3 text-center h-100 shadow-sm">
              <i className="fa-solid fa-laptop-code text-success fs-4 mb-2"></i>
              <h6 className="fw-bold mb-1">Focus</h6>
              <p className="text-muted small mb-0">
                Web Development
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="border rounded-4 p-3 text-center h-100 shadow-sm">
              <i className="fa-solid fa-location-dot text-success fs-4 mb-2"></i>
              <h6 className="fw-bold mb-1">Location</h6>
              <p className="text-muted small mb-0">Whitefield, Bengaluru, India</p>
            </div>
          </div>
        </motion.div>

        {/* PERSONAL NOTE */}
        <motion.p
          className="text-muted text-center mx-auto"
          style={{ maxWidth: "720px" }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Beyond coding, I enjoy cooking and experimenting with new recipes,
          which keeps me creative and balanced. I’m actively seeking
          opportunities as a Software / Frontend Engineer to apply my skills and
          grow in real-world projects.
        </motion.p>

      </div>
    </section>
  );
}

export default About;
