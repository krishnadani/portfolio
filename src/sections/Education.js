import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const educationData = [
  {
    title: "Bachelor of Engineering – Computer Science & Design",
    place: "MVJ College of Engineering, Bangalore",
    score: "CGPA: 8.47",
    year: "2022 – 2026",
  },
  {
    title: "Higher Secondary Education (Science)",
    place: "Government PU College, Haveri",
    score: "Percentage: 87.5%",
    year: "2021 – 2022",
  },
  {
    title: "Higher Secondary Education (Science)",
    place: "St Anne's PU College, Haveri",
    score: "Percentage: 99%",
    year: "2020 – 2021",
  },
  {
    title: "SSLC",
    place: "Sai Chandra Gurukul, Haveri",
    score: "Percentage: 88.48%",
    year: "2019 – 2020",
  },
];

function Education() {
  return (
    <AnimatedSection>
      <section className="py-5" id="education" style={{ background: "#F0FDF4" }}>
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Education</h2>
            <p className="text-muted">My academic journey</p>
          </div>

          {/* Timeline */}
          <div className="d-flex flex-column align-items-center">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white shadow-sm rounded p-4 mb-4"
                style={{ maxWidth: "700px", width: "100%" }}
              >
                <h5 className="fw-bold text-success">{edu.title}</h5>
                <p className="mb-1">{edu.place}</p>
                <p className="mb-1 small text-muted">{edu.score}</p>
                <span className="small text-muted">{edu.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default Education;
