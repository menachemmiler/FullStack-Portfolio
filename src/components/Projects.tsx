import { ExternalLink } from "lucide-react";

const Projects = () => (
  <div className="page">
    <section className="projects-section">
      <h2>My projects</h2>
      <div className="projects-flex">
        {[1, 2, 3].map((project) => (
          <div key={project} className="project-card">
            <div className="project-image">
              <img
                src={`https://source.unsplash.com/random/800x600?tech&${project}`}
                alt="Project"
              />
            </div>
            <div className="project-content">
              <h3>Project Title {project}</h3>
              <p>
                A brief description of the project and the technologies used in
                its development.
              </p>
              <div className="project-links">
                <a href="#" className="button button-small">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Projects;
