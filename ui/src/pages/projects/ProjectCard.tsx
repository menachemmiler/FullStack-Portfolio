import { Code, ExternalLink, GitBranch, Server } from 'lucide-react';
import { IProject } from '../../utils/interfaces';

interface Props {
  project: IProject;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-img" />

      <div className="info-bar">
        <h3>{project.title}</h3>
        <p className="short">{project.description}</p>

        {/* ↓ מה שמופיע רק בהובר (חשוף באנימציה) */}
        <div className="extra">
          <p className="full">{project.fullDescription}</p>

          <div className="links">
            {project.liveLink && (
              <a target="_blank" href={project.liveLink} className="live">
                צפה באתר <ExternalLink size={16} />
              </a>
            )}
            {project.githubClient && (
              <a target="_blank" href={project.githubClient}>
                Client <Code size={16} />
              </a>
            )}
            {project.githubServer && (
              <a target="_blank" href={project.githubServer}>
                Server <Server size={16} />
              </a>
            )}
            {project.githubAll && (
              <a target="_blank" href={project.githubAll}>
                GitHub <GitBranch size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
