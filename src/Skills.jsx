import React from 'react';

function Skills({ skills }) {
  return (
    <section className="section">
      <div className="section-content">
        <div className="section-title">
          <h2>Key Skills</h2>
        </div>
        <div className="section-description">
          <div className="skill-list">
            {skills.map((skillRow, index) => (
              <div className="skill-row" key={index}>
                {skillRow.map((skill, idx) => (
                  <p key={idx}>{skill}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
