import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

function CodingProfiles() {
  return (
    <AnimatedSection>
      <section className="py-5" style={{ background: "#F9FAFB" }} id="coding">
        <div className="container text-center">

          {/* Header */}
          <motion.h2
            className="fw-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Coding Profiles
          </motion.h2>

          <motion.p
            className="text-muted mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Competitive programming and continuous problem-solving practice
          </motion.p>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">

              {/* Profile Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-4 rounded shadow bg-white d-flex flex-column align-items-center"
                style={{ borderTop: "5px solid #16A34A" }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  style={{ width: "120px", marginBottom: "16px" }}
                />

                <h5 className="fw-bold mb-2">LeetCode</h5>

                <p className="text-muted small text-center mb-3">
                  Solving Data Structures & Algorithms problems focusing on
                  optimization, clean logic, and consistency.
                </p>

                <a
                  href="https://leetcode.com/u/krishnagdani/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success px-4"
                >
                  View Profile →
                </a>

                <div className="mt-3 small text-muted">
                  Focus Areas: Arrays • Strings • DP • Trees
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default CodingProfiles;
