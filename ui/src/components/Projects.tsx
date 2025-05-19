import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import { RootState } from "../redux/store";
import { DataStatus } from "../utils/interfaces";

const Projects = () => {
  const { error, projects, status } = useSelector(
    (state: RootState) => state.projects
  );

  if (status == DataStatus.LOADING) return <p>Loading...</p>;
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
