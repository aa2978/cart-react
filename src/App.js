<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './App.css';
import * as d3 from 'd3';
import Child1 from './child1';
import Child2 from './child2';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv('/tips.csv').then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <Child1 data={data} />
      <h1> </h1>
      <Child2 data={data} />
=======
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <h1><b>Anthony Armijos</b></h1>
          <p className="title">Computer Science</p>
        </div>
        <div className="contact-info">
        <p>Email: <a class="email-link" href="mailto:anthony.armijos@outlook.com">anthony.armijos@outlook.com</a></p>
          <p>Web: <a href="https://abc.github.io/abc" target="_blank" rel="noopener noreferrer">abc.github.io/abc</a></p>
          <p>Mobile: 973706403</p>
        </div>
      </header>

      <section className="section">
        <div className="section-content">
          <div className="section-title">
            <h2>Personal Profile</h2>
          </div>
          <div className="section-description">
            <p>Student at NJIT studying Computer Science. Senior and has worked on multiple group projects. Seeking a challenging role where I can leverage my technical skills to contribute towards the advancement of cyber security.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="section-title">
            <h2>Work Experience</h2>
          </div>
          <div className="section-description">
            <div className="job-entry">
              <h3>Cashier at Dollar Tree (August 2024 – Current)</h3>
              <p>Cashier at Dollar Tree, responsible for stocking inventory and dealing with inventory. Managed cash transactions while providing excellent customer service and ensuring a smooth checkout process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="section-title">
            <h2>Key Skills</h2>
          </div>
          <div className="section-description">
            <div className="skill-list">
              <div className="skill-row">
                <p>Java</p>
                <p>Python</p>
                <p>Structured Query Language</p>
              </div>
              <div className="skill-row">
                <p>JavaScript</p>
                <p>HTML</p>
                <p>C++</p>
              </div>
              <div className="skill-row">
                <p>C#</p>
                <p>C</p>
                <p>Visual Basic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <div className="section-title">
            <h2>Education</h2>
          </div>
          <div className="section-description">
            <div className="education-entry">
              <h3>New Jersey Institute of Technology</h3>
              <div className="education-details">
                <p>BS in Computer Science</p>
                <p>2021-2025</p>
                <p>GPA: 3.4</p>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> c0180d287986c71ffb777f3fa1d8bd515dd86429
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> c0180d287986c71ffb777f3fa1d8bd515dd86429
