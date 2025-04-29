import { useProjects } from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div className="page">
      <section className="projects-section">
        <h2>My projects</h2>
        <div className="projects-flex">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
