import {  ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="page">
    <section className="home">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Meny Miler</span>
        </h1>
        <p className="hero-text">
          Full-stack developer specializing in building exceptional digital
          experiences. Currently focused on building accessible, human-centered
          products.
        </p>
        <div className="button-group">
          <Link to="/projects" className="button button-primary">
            View My Work
            <ExternalLink size={18} />
          </Link>
          <a
            href="mailto:ms0556727820@gmail.com"
            className="button button-outline"
          >
            Contact Me
            <Mail size={18} />
          </a>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/menachemmiler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/%D7%9E%D7%A0%D7%97%D7%9D-%D7%9E%D7%99%D7%9C%D7%A8-165922335"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
