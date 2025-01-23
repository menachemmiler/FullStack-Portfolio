import { Mail } from "lucide-react";

const About = () => (
  <div className="page">
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate software developer with experience in building web
          applications using modern technologies. My focus is on creating
          efficient, scalable, and user-friendly solutions that solve real-world
          problems.
        </p>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>CSS/SCSS</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <a href="mailto:contact@example.com" className="button button-primary">
          Get in Touch
          <Mail size={18} />
        </a>
      </div>
    </section>
  </div>
);

export default About;
