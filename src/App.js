import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>PURUSHOTAM KUMAR</h1>
        <p>purusho1428@gmail.com | (+91) 9798933342</p>
      </header>

      <section className="section">
        <h2>Academic Projects</h2>
        <div className="project">
          <h3>StudyNotion (Edtech Platform) <a href="https://github.com/Puru0222/StudyNotion" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://study-notion-self-one.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a></h3>
          <ul>
            <li>Implemented user authentication (login, signup, password reset, email verification) and role-based access control.</li>
            <li>Designed features for course management for instructors.</li>
            <li>Enhanced user engagement with enrollment and progress tracking functionalities.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Game Challenge Platform (In Progress) <a href="https://github.com/Puru0222/game" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://gamechallenger.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a></h3>
          <ul>
            <li>Developing a real-time mobile game challenge platform with custom entry fees and prize distribution.</li>
            <li>Integrated WebSocket connections for real-time challenge updates.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Cloud-Based File Management System <a href="https://github.com/Puru0222/fileUpload" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
          <ul>
            <li>Developed file upload system with local and cloud storage (Cloudinary) for images and videos.</li>
            <li>Implemented email notifications for successful uploads.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Authentication App (User Authentication API) <a href="https://github.com/Puru0222/Authapp" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
          <ul>
            <li>Implemented user authentication with JWT and secure session management.</li>
            <li>Developed RESTful API endpoints for secure user authentication.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <p>B.Tech in CSE | Lakshmi Narain College of Technology, Indore (Expected: 2025)</p>
        <p>XII (BSEB) | Kumar Kalika Memorial College, Jamui (2021)</p>
        <p>X (ICSE) | St. Joseph’s School, Jamui (2019)</p>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <p><strong>Languages:</strong> C++, HTML, CSS, JavaScript</p>
        <p><strong>Frameworks:</strong> React, Express.js, Tailwind CSS</p>
        <p><strong>Core Concepts:</strong> DSA, OOPs</p>
        <p><strong>Tools & Platforms:</strong> Postman, Git, GitHub</p>
      </section>

      <section className="section">
        <h2>Achievements</h2>
        <ul>
          <li>Solved 600+ Questions on LeetCode</li>
          <li>Solved 200+ Questions on GeeksforGeeks</li>
        </ul>
      </section>
    </div>
  );
};

export default App;
