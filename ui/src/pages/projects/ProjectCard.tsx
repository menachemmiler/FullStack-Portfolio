import { Code, ExternalLink, Github, Server } from 'lucide-react';
import { IProject } from '../../utils/interfaces';

interface Props {
  project: IProject;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div key={`${project}`} className="project-card">
      <div className="project-image">
        <img src={`${project.image}`} alt={`${project.title} img`} />
      </div>
      <div className="project-content">
        <div>
          <h3>{`${project.title}`}</h3>
          <p>{`${project.description}`}</p>
        </div>

        <div className="project-links">
          <div className="left">
            <a target="_blank" href={`${project.liveLink}`} className="button">
              View Project <ExternalLink size={16} />
            </a>
            {project.githubAll ? (
              <a target="_blank" href={`${project.githubAll}`} className="button">
                View Code <Github size={16} />
              </a>
            ) : project.githubClient && project.githubServer ? (
              <>
                <a target="_blank" href={`${project.githubClient}`} className="button">
                  View Code Client <Code size={16} />
                </a>{' '}
                <a target="_blank" href={`${project.githubServer}`} className="button">
                  View Code Server <Server size={16} />
                </a>
              </>
            ) : project.githubServer ? (
              <a target="_blank" href={`${project.githubServer}`} className="button">
                View Code Server <Server size={16} />
              </a>
            ) : project.githubClient ? (
              <a target="_blank" href={`${project.githubClient}`} className="button">
                View Code Client <Code size={16} />
              </a>
            ) : (
              <></>
            )}
          </div>
          <div className="right">
            <button
              onClick={() => {
                alert(`${project.fullDescription}`);
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
