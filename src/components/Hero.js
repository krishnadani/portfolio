import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section
      className="d-flex align-items-center text-center"
      style={{
        minHeight: "100vh",
        background: "#F0FDF4",
        paddingTop: "80px",
        paddingBottom: "60px",
      }}
    >
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Floating Profile Image */}
        <motion.img
          src="/pfp.jpg"
          alt="Profile"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{
            width: "145px",
            height: "145px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "0px solid #16A34A",
            marginBottom: "24px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        />

        {/* Name */}
        <motion.h1 variants={item} className="fw-bold display-5">
          Hi, I’m <span className="text-success">Krishna Dani</span>
        </motion.h1>

        {/* Title */}
        <motion.p variants={item} className="lead mt-3">
          Software Developer | Frontend Engineer (React)
        </motion.p>

        {/* Summary */}
        <motion.p
          variants={item}
          className="text-muted mt-2 mx-auto"
          style={{ maxWidth: "650px" }}
        >
          Building scalable, user-centric web applications with clean UI and
          reliable backend integrations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="d-flex justify-content-center gap-3 mt-4 flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/krishnadani"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success px-4"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/krishnagdani/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-success px-4"
          >
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/drive/folders/1Jmy67ZzBpAUS5hlk4aqDgm_BN8Cc0ate?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark px-4"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
