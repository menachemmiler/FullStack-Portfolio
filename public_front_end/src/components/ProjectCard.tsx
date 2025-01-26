import { Code, ExternalLink, Github, Server } from "lucide-react";
import { Project } from "./Projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div key={`${project}`} className="project-card">
      <div className="project-image">
        <img src={`${project.image}`} alt={`${project.title} img`} />
      </div>
      <div className="project-content">
        <div>
          <h3>Project Title {`${project.title}`}</h3>
          <p>
            A brief description of the project and the technologies used in its
            development.
          </p>
        </div>

        <div className="project-links">
          <div className="left">
            <a href={`${project.liveLink}`} className="button">
              View Project <ExternalLink size={16} />
            </a>
            {project.githubAll ? (
              <a href={`${project.githubAll}`} className="button">
                View Code <Github size={16} />
              </a>
            ) : project.githubClient && project.githubServer ? (
              <>
                <a href={`${project.githubClient}`} className="button">
                  View Code Client <Code size={16} />
                </a>{" "}
                <a href={`${project.githubServer}`} className="button">
                  View Code Server <Server size={16} />
                </a>
              </>
            ) : project.githubServer ? (
              <a href={`${project.githubServer}`} className="button">
                View Code Server <Server size={16} />
              </a>
            ) : project.githubClient ? (
              <a href={`${project.githubClient}`} className="button">
                View Code Client <Code size={16} />
              </a>
            ) : (
              <></>
            )}
          </div>
          <div className="right">
            <button
              onClick={() => {
                alert("about the project");
              }}
              className="button button-outline"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
