import { Code, ExternalLink, Server } from 'lucide-react';
import { IProject } from '../../utils/interfaces';

interface Props {
  project: IProject;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="project-card">
      <img className="project-img" src={project.image} alt={project.title} />

      {/* basic info always visible */}
      <div className="info-bar">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      {/* full panel on hover */}
      <div className="hover-panel">
        <h3>{project.title}</h3>
        <p>{project.fullDescription}</p>

        <div className="links">
          {project.liveLink && (
            <a target="_blank" href={project.liveLink} className="button">
              צפה באתר <ExternalLink size={16} />
            </a>
          )}
          {project.githubClient && (
            <a target="_blank" href={project.githubClient} className="button">
              Client <Code size={16} />
            </a>
          )}
          {project.githubServer && (
            <a target="_blank" href={project.githubServer} className="button">
              Server <Server size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
