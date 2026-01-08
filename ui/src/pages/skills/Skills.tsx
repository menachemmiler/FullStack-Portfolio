import { Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../../components/PageTransition/PageTransition';
import './skills.css';

const Skills = () => (
  <PageTransition>
    <Helmet>
      <title>מנחם מילר - מיומנויות</title>
      <meta name="description" content="המיומנויות והניסיון שלי בפיתוח אתרים ואפליקציות ווב..." />
    </Helmet>
    <div className="page-skills">
      <section className="skills-section">
        <div className="skills-content">
          <h2>Skills and Experience</h2>
          <p>The technologies and tools I use to build advanced digital solutions</p>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>React, TypeScript/JavaScript</li>
                <li>HTML</li>
                <li>CSS/SCSS, Tailwind CSS</li>
                <li>State Management (Redux, Zustand)</li>
                <li>i18n</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>REST API</li>
                <li>Express.js</li>
                <li>NestJS</li>
                <li>WebSocket</li>
                <li>JSON Web Token (JWT)</li>
                <li>.Net Framework</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Languages</h3>
              <ul>
                <li>Python</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>C#</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Databases & Tools</h3>
              <ul>
                <li>MongoDB (Mongoose)</li>
                <li>Neo4J</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>Version Control: Git, GitHub, GitLab</li>
                <li>DevOps/Cloud: Docker</li>
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
  </PageTransition>
);

export default Skills;
