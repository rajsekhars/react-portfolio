import React from 'react'
import './App.css'
import profileImage from './assets/profile.jpg'
import profileImage2 from './assets/Profile2.jpeg'
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from 'react-icons/fa'


function App() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="container">
      <header className="hero">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <img src={profileImage2} style={{ display: 'none' }} alt="Profile" className="profile-img" />
        <h1>Hi, I'm Rajasekhar</h1>
        <p>Full Stack Web Developer</p>
      </header>
      <nav className="navbar">
        <a onClick={() => scrollTo('about')}>About</a>
        <a onClick={() => scrollTo('skills')}>Skills</a>
        <a onClick={() => scrollTo('projects')}>Projects</a>
        <a onClick={() => scrollTo('experience')}>Experience</a>
        <a onClick={() => scrollTo('education')}>Education</a>
        <a onClick={() => scrollTo('contact')}>Contact</a>
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
        <button onClick={() => scrollTo('Skills')}className="scroll-icon-right hidden"><FaArrowDown /></button>
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Redux</span>
          <span>Angular</span>
          <span>SFCC UI</span>
          <span>JQuery</span>
          <span>Java</span>
          <span>Python Flask</span>
          <span>Php</span>
          <span>Next.js</span>
          <span>Express.js</span>
          <span>SQL</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>PostgreSQL</span>
          <span>REST APIs</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>Power BI</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>
          <span>Materia UI</span>
          <span>LESS</span>
          <span>SCSS</span>
          <span>Figma</span>
          <span>Git & GitHub</span>
          <span>GraphQL</span>
          <span>JEST</span>
          <span>PlayWright</span>
          <span>Agile</span>
        </div>
        <button onClick={() => scrollTo('projects')}className="scroll-icon-right hidden"><FaArrowDown /></button>
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
        <button onClick={() => scrollTo('experience')}className="scroll-icon-right"><FaArrowDown /></button>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Technical Lead</h3>
            <p>Walmart (Contract), Sunnyvale, USA (Aug 2025 - Present)</p>
            <p>Leading development and implementation of the 'Seller Incentives Management (SIM)' application for Walmart using React v18, Node, TypeScript, JavaScript, REST, PlayWright, Express and SQL</p>
          </div>
          <div className="project-card">
            <h3>Technical Lead</h3>
            <p>Cleveland Cliffs (Contract), East Chicago, IN, USA (Jul 2023 - Jul 2025)</p>
            <p>Leading development and implementation of the 'Order to Cash(OTC)' application for Cliffs using React v18, Node, TypeScript, JavaScript, REST, Express and SQL, optimizing web performance and user experience across enterprise applications.</p>
          </div>
          <div className="project-card">
          <h3>Technical Consultant</h3>
            <p>GSPANN Technologies, India (2021 - 2023)</p>
            <p>Led the development of a responsive and user-friendly E-Commerce application using ReactJS, Node, Angular, SFCC UI, JavaScript, jQuery, ISML, CSS3, HTML5, Figma and SQL.</p>
          </div>
          <div className="project-card">
          <h3>Lead Engineer</h3>
            <p>HCL Technologies, India (2016 - 2020)</p>
            <p>Implemented and designed responsive networking domain applications using ReactJS, Angular JS, Angular 10, JavaScript, jQuery, Python django, CSS3, SASS, LESS, Bootstrap, Figma, HTML5, Core Java and MySQL.</p>
          </div>
          <div className="project-card">
          <h3>Senior Software Engineer</h3>
            <p>Innovare IT Solutions, India (2015 - 2016)</p>
            <p>Built virtual reality based customizable and interactive applications using JavaScript, jQuery, Three.js, CSS3, Bootstrap, Material UI, HTML5, PHP (CS Cart) and MySQL.
            </p>
          </div>
          <div className="project-card">
          <h3> Software Engineer</h3>
            <p>Messisoft, India (2015 - 2016)</p>
            <p>Designed and implemented interactive and responsive web applications using PHP, MySQL, jQuery, JavaScript, CSS3, Bootstrap, Magento, WordPress and HTML5.</p>
          </div>
          <div className="project-card">
          <h3>Software Engineer</h3>
            <p>Zonup Technologies, India (2012 - 2014)</p>
            <p>Developed responsive and user-friendly web applications and CMS components for healthcare, social networking and e-Commerce domain using PHP, MySQL, jQuery, JavaScript, CSS3, Bootstrap and HTML5.</p>
          </div>
        </div>
        <button onClick={() => scrollTo('education')}className="scroll-icon-right"><FaArrowDown /></button>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Bachelor of Technology in Electronics & Communication Engineering</h3>
            <p>JNTU Kakinada, India (2008 - 2012)</p>
            <p>Graduated with distinction. Developed a passion for problem-solving and software development through academic and side projects.</p>
          </div>
        </div>
        <button onClick={() => scrollTo('contact')}className="scroll-icon-right"><FaArrowDown /></button>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>I'd love to hear from you. Let's connect and create something amazing together.</p>
        <p>Email: raj.seerapu06@gmail.com / rajasekharseerapu@gmail.com</p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/rajsekhars" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/rajsekhars" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="/Rajsekhar_Resume.docx" download title="Download Resume"><FaDownload /></a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Rajasekhar R. Seerapu. Designed with 💙 using React.</p>
      </footer>
    </div>
  )
}

export default App
