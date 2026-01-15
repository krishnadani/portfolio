import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const projects = [
  {
    title: "WarmHands – Donation Platform",
    desc: "Full-stack donation platform with payment gateway, help requests, admin dashboard, and MongoDB backend.",
    tech: "React, Node.js, Express, MongoDB, Razorpay, Vercel",
    image: "/WarmHands.avif", // add screenshot later
    link: "https://warm-handss-ubgc.vercel.app/",
    github: "https://github.com/krishnadani/WarmHandss",
  },
  {
    title: "RecipeWave",
    desc: "Recipe discovery web app with search, filters, and responsive UI.",
    tech: "React, Spoonacular API, CSS",
    image: "/recipewave.jpg",
    link: "https://recipewave.vercel.app/",
    github: "https://github.com/krishnadani/recipewave",
  },
  {
    title: "TrustLens – Fake Review Detection",
    desc:
      "AI-powered platform achieving ~85% accuracy in fake review detection with JWT authentication and MySQL backend.",
    tech: "React, FastAPI, JWT, MySQL, Tailwind",
    image: "/review.jpg",
    link: "",
    github: "https://github.com/krishnadani/TrustLens",
  },
  {
    title: "Event Management System",
    desc:
      "Event creation and registration system with relational database design and CRUD operations.",
    tech: "HTML, CSS, MySQL",
    image: "/event.jpg",
    link: "",
    github: "https://github.com/krishnadani/EventX",
  },
];

function Projects() {
  return (
    <AnimatedSection>
      <section className="container py-5" id="projects">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Projects</h2>
          <p className="text-muted">Some of my featured work</p>
        </div>

        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-6" key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="card h-100 shadow-sm border-0 project-card"
                style={{ overflow: "hidden" }}
              >
                {/* Image */}
                <div style={{ overflow: "hidden" }}>
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-100"
                    style={{ height: "220px", objectFit: "cover" }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Body */}
                <div className="card-body">
                  <h5 className="fw-bold">{p.title}</h5>
                  <p className="text-muted small">{p.desc}</p>
                  <p className="small">
                    <b>Tech:</b> {p.tech}
                  </p>
                </div>

                {/* Footer */}
                <div className="card-footer bg-white border-0 d-flex gap-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success btn-sm"
                  >
                    Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-sm"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Projects;
