import { useAppSelector } from '../../../redux/store';
import { DataStatus } from '../../../utils/interfaces';
import EditProjectCard from './EditProjectCard';

const EditProjects = () => {
  const { error, status, projects } = useAppSelector((state) => state.projects);

  return (
    <div className="edit-projects">
      <div className="header">
        <h2>Edit Projects</h2>
      </div>
      <div className="center">
        {error && <div>{error}</div>}
        {status === DataStatus.LOADING && <div>Loading...</div>}
        {projects &&
          projects.map((project) => <EditProjectCard project={project} key={project._id} />)}
      </div>
    </div>
  );
};

export default EditProjects;
