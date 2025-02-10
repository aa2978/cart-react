import React from 'react';

function WorkExperience({ experience }) {
  return (
    <section className="section">
      <div className="section-content">
        <div className="section-title">
          <h2>Work Experience</h2>
        </div>
        <div className="section-description">
          {experience.map((job, index) => (
            <div className="job-entry" key={index}>
              <h3>{job.title} ({job.date})</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
