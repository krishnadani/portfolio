import React from "react";

const specializations = [
  {
    title: "Data Structures & Algorithms",
    short: "DSA",
    points: [
      "Arrays, Strings, Linked Lists",
      "Stacks, Queues, Trees, Graphs",
      "Recursion and Dynamic Programming",
      "Problem solving using C++",
    ],
  },
  {
    title: "Object Oriented Programming",
    short: "OOPs",
    points: [
      "Encapsulation, Inheritance, Polymorphism",
      "Abstraction and Interfaces",
      "Design principles and reusable code",
      "C++ and JavaScript implementations",
    ],
  },
  {
    title: "Operating Systems",
    short: "OS",
    points: [
      "Process and Thread Management",
      "Memory Management and Scheduling",
      "Deadlocks and Synchronization",
      "File Systems fundamentals",
    ],
  },
  {
    title: "Computer Networks",
    short: "CN",
    points: [
      "TCP/IP, HTTP/HTTPS, DNS",
      "OSI & TCP/IP Models",
      "Routing and Switching basics",
      "Network security fundamentals",
    ],
  },
];

function Specializations() {
  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Learning & Specializations</h2>
          <p className="text-muted">
            Core computer science foundations and applied knowledge
          </p>
        </div>

        <div className="row g-4">
          {specializations.map((spec, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div
                className="h-100 p-4 rounded shadow-sm"
                style={{
                  borderTop: "4px solid #16A34A",
                  background: "#F9FAFB",
                }}
              >
                <h5 className="fw-bold text-success mb-2">
                  {spec.short}
                </h5>

                <h6 className="fw-semibold mb-3">
                  {spec.title}
                </h6>

                <ul className="small text-muted ps-3 mb-0">
                  {spec.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Specializations;
