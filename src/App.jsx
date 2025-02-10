import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

function App() {
  const [resumeData] = useState({
    name: 'Anthony Armijos',
    title: 'Computer Science',
    contact: {
      email: 'anthony.armijos@outlook.com',
      website: 'https://aa2978.github.io/cart-react/',
      phone: '973706403'
    },
    bio: 'Student at NJIT studying Computer Science. Senior and has worked on multiple group projects. Seeking a challenging role where I can leverage my technical skills to contribute towards the advancement of cyber security.',
    workExperience: [
      {
        title: 'Cashier at Dollar Tree',
        date: 'August 2024 – Current',
        description: 'Cashier at Dollar Tree, responsible for stocking inventory and dealing with inventory. Managed cash transactions while providing excellent customer service and ensuring a smooth checkout process.'
      }
    ],
    skills: [
      ['Java', 'Python', 'Structured Query Language'],
      ['JavaScript', 'HTML', 'C++'],
      ['C#', 'C', 'Visual Basic']
    ],
    education: {
      institution: 'New Jersey Institute of Technology',
      degree: 'BS in Computer Science',
      years: '2021-2025',
      gpa: '3.4'
    }
  });

  return (
    <div className="App">
      <Header name={resumeData.name} title={resumeData.title} contact={resumeData.contact} />
      <PersonalProfile profile={resumeData.bio} />
      <WorkExperience experience={resumeData.workExperience} />
      <Skills skills={resumeData.skills} />
      <Education education={resumeData.education} />
    </div>
  );
}

export default App;