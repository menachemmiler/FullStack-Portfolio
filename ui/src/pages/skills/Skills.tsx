import { Mail } from 'lucide-react';
import './skills.css';

const Skills = () => (
  <div className="page-skills">
    <section className="skills-section">
      <div className="skills-content">
        <h2>Skills and Experience</h2>
        <p>The technologies and tools I use to build advanced digital solutions</p>
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
        <a href="mailto:ms0556727820@gmail.com" className="button button-primary">
          Get in Touch
          <Mail size={18} />
        </a>
      </div>
    </section>
  </div>
);

export default Skills;
