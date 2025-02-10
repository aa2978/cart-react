import React from 'react';

function Education({ education }) {
  return (
    <section className="section">
      <div className="section-content">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="section-description">
          <div className="education-entry">
            <h3>{education.institution}</h3>
            <div className="education-details">
              <p>{education.degree}</p>
              <p>{education.years}</p>
              <p>GPA: {education.gpa}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
