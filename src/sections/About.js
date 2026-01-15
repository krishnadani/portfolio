import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container text-center">

        {/* Heading */}
        <motion.h2
          className="fw-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          className="text-muted mx-auto"
          style={{ maxWidth: "820px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I am a Computer Science & Design Engineering undergraduate with strong
          hands-on experience in React.js, full-stack development, and
          problem-solving. I enjoy building production-ready applications,
          optimizing user experience, and learning modern web technologies.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          className="text-muted mx-auto mt-3"
          style={{ maxWidth: "820px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          My goal is to work as a Software / Frontend Engineer contributing to
          impactful products while continuously improving my technical skills
          and system design knowledge.
        </motion.p>

      </div>
    </section>
  );
}

export default About;
