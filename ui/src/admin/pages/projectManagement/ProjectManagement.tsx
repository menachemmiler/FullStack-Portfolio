import loading from '../../../assets/loading.gif';
import { useAppSelector } from '../../../redux/store';
import { DataStatus } from '../../../utils/interfaces';
import AddProject from './AddProject';
import EditProjects from './EditProjects';
import './projectManagement.css';

const ProjectManagement = () => {
  const { error, status, user } = useAppSelector((state) => state.user);

  if (user) {
    return (
      <div className="page">
        {status === DataStatus.LOADING && (
          <>
            <img src={loading} alt="Loading..." />
          </>
        )}
        {status === DataStatus.FAILED && (
          <>
            <p style={{ color: 'red' }}>{error}</p>{' '}
          </>
        )}
        <div className="project-management">
          <div className="header">
            <h1>Hello {user.username}</h1>
          </div>
          <div className="main">
            <AddProject />
            <EditProjects />
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectManagement;
