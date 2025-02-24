import React from 'react';

function PersonalProfile({ profile }) {
  return (
    <section className="section">
      <div className="section-content">
        <div className="section-title">
          <h2>Personal Profile</h2>
        </div>
        <div className="section-description">
          <p>{profile}</p>
        </div>
      </div>
    </section>
  );
}

export default PersonalProfile;
