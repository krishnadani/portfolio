import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Mastering C++ Language – C++ Programming For Beginners",
    issuer: "Udemy",
    issued: "July 2025",
    credentialId: "UC-8897db59-bc69-4f83-af3b-5643c7d8af88",
    link: "https://ude.my/UC-8897db59-bc69-4f83-af3b-5643c7d8af88",
  },
  {
    title: "Hands On React JS From Beginner to Expert",
    issuer: "Udemy",
    issued: "September 2025",
    credentialId: "UC-4054964c-df2a-4ff6-8e03-a0d96522797e",
    link: "https://ude.my/UC-4054964c-df2a-4ff6-8e03-a0d96522797e",
  },
  {
    title: "Mastering the Basics of Git: A Step-by-Step Guide",
    issuer: "Udemy",
    issued: "March 2025",
    credentialId: "UC-9af372aa-1987-49a0-8480-e48322096e42",
    link: "https://ude.my/UC-9af372aa-1987-49a0-8480-e48322096e42",
  },
];

function Certifications() {
  return (
    <section className="py-5" style={{ background: "#F9FAFB" }} id="certifications">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Certifications & Achievements</h2>
          <p className="text-muted">
            Verified professional learning and skill development
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className="h-100 p-4 rounded shadow-sm bg-white"
                style={{ transition: "0.3s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0px)")
                }
              >
                <h5 className="fw-bold text-success mb-2">{cert.title}</h5>

                <p className="mb-1">
                  <strong>Issued By:</strong> {cert.issuer}
                </p>

                <p className="mb-1">
                  <strong>Issued:</strong> {cert.issued}
                </p>

                <p className="small text-muted mb-3">
                  Credential ID: {cert.credentialId}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-success btn-sm"
                >
                  View Credential →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
