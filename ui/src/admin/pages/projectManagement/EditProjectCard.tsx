import { useEffect, useState } from 'react';
import loading from '../../../assets/loading.gif';
import { deleteProject, updateProjects } from '../../../redux/slices/projectSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { DataStatus, IProject } from '../../../utils/interfaces';

interface Props {
  project: IProject;
}

const EditProjectCard = ({ project }: Props) => {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state) => state.projects);
  const [statusDeletedProject, setStatusDeletedProject] = useState(DataStatus.IDLE);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusDeletedProject(DataStatus.LOADING);
    try {
      const deleted = await dispatch(deleteProject(project._id));
      if (deleted.meta.requestStatus === 'fulfilled') {
        setStatusDeletedProject(DataStatus.SUCCESS);
      } else {
        setStatusDeletedProject(DataStatus.FAILED);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (statusDeletedProject == DataStatus.FAILED) {
      setTimeout(() => {
        setStatusDeletedProject(DataStatus.IDLE);
      }, 2000);
    } else if (statusDeletedProject == DataStatus.SUCCESS) {
      setTimeout(() => {
        setStatusDeletedProject(DataStatus.IDLE);
        dispatch(updateProjects(projects?.filter((p) => p._id !== project._id) || []));
      }, 2000);
    }
  }, [statusDeletedProject]);

  return (
    <>
      {statusDeletedProject == DataStatus.LOADING && (
        <div key={`${project._id}`} className="edit-project-card">
          <img src={loading} alt="Loading..." />
        </div>
      )}
      {statusDeletedProject == DataStatus.SUCCESS && (
        <div key={`${project._id}`} className="edit-project-card">
          <div>Project {project.title} deleted successfully!</div>
        </div>
      )}
      {statusDeletedProject == DataStatus.IDLE && (
        <div key={`${project._id}`} className="edit-project-card">
          <div className="edit-project-image">
            <img src={`${project.image}`} alt={`${project.title} img`} />
          </div>
          <div className="edit-project-content">
            <div className="edit-project-text">
              <div>
                <h3>{`${project.title}`}</h3>
                <p>{`${project.description}`}</p>
              </div>
            </div>
            <div className="edit-project-buttons">
              <button className="edit-button">Edit</button>
              <button className="delete-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProjectCard;
