import React from "react";

function Languages() {
  const languages = [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Full Professional Proficiency" },
    { name: "Kannada", level: "Native / Bilingual Proficiency" },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Languages</h2>

        <div className="row justify-content-center g-4">
          {languages.map((lang, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div
                className="p-4 h-100 rounded shadow-sm"
                style={{
                  background: "#FFFFFF",
                  borderTop: "4px solid #16A34A",
                }}
              >
                <h5 className="fw-semibold mb-2">{lang.name}</h5>
                <p className="text-muted small">{lang.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
