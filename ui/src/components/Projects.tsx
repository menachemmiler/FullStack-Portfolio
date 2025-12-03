import { useSelector } from 'react-redux';
import loading from '../assets/loading.gif';
import { RootState } from '../redux/store';
import { DataStatus } from '../utils/interfaces';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { error, projects, status } = useSelector((state: RootState) => state.projects);

  return (
    <div className="page">
      <section className="projects-section">
        {status === DataStatus.LOADING && <img src={loading} alt="Loading..." />}
        {status === DataStatus.FAILED && <p style={{ color: 'red' }}>{error}</p>}
        {status === DataStatus.SUCCESS && (
          <>
            <h2>My projects</h2>
            <div className="projects-flex">
              {projects &&
                projects.map((project) => <ProjectCard key={project._id} project={project} />)}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Projects;
