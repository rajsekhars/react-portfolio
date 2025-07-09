import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Hi, I'm Rajasekhar</h1>
        <p>Full Stack Web Developer</p>
      </header>

      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about">
        <h2>About Me</h2>
        <p>
        I'm a passionate Full-Stack Developer with 12 years of experience in building performant, accessible, scalable and visually engaging web applications. 
        </p>
        <p>
        My expertise spans React, Angular, Node.js, TypeScript, JavaScript, SFCC UI, jQuery, HTML5, CSS3, Python, Java, MySQL, SQL and modern frontend architecture, with a strong focus on optimizing performance, integrating APIs, and delivering seamless user experiences. 
        </p>
        <p>
        When I'm not coding, I enjoy photography and writing.
        </p>
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Python Flask</span>
          <span>SFCC UI</span>
          <span>Java</span>
          <span>JQuery</span>
          <span>Node.js</span>
          <span>AWS</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Git & GitHub</span>
          <span>REST APIs</span>
          <span>SQL / MongoDB</span>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A clean, responsive React portfolio to showcase my skills and contact details.</p>
            <a href="#" target="_blank">View Live</a>
          </div>
          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>A productivity tool built with MERN stack allowing users to manage daily tasks.</p>
            <a href="#" target="_blank">View GitHub</a>
          </div>
          <div className="project-card">
            <h3>Photo Gallery</h3>
            <p>Modern photo gallery using React hooks and Cloudinary API to store images.</p>
            <a href="#" target="_blank">View Gallery</a>
          </div>
        </div>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Senior Software Engineer</h3>
            <p>ABC Technologies, USA (2021 - Present)</p>
            <p>Leading frontend development using React, optimizing web performance and user experience across enterprise applications.</p>
          </div>
          <div className="project-card">
            <h3>Full Stack Developer</h3>
            <p>XYZ Solutions, India (2013 - 2021)</p>
            <p>Built and maintained scalable web applications, integrated third-party APIs, and ensured code quality using best practices.</p>
          </div>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Bachelor of Technology in Electronics & Communication</h3>
            <p>JNTU Hyderabad, India (2009 - 2013)</p>
            <p>Graduated with distinction. Developed a passion for problem-solving and software development through academic and side projects.</p>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>I'd love to hear from you. Let's connect and create something amazing together.</p>
        <p>Email: raj.seerapu06@gmail.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/rajsekhars" target="_blank">linkedin.com/in/rajsekhars</a></p>
        <p>GitHub: <a href="https://github.com/rajsekhars" target="_blank">github.com/rajsekhars</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Rajasekhar R. Seerapu. Designed with 💙 using React.</p>
      </footer>
    </div>
  )
}

export default App
