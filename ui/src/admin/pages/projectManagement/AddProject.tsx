import { Button, TextField } from '@mui/material';
import { SendIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import loading from '../../../assets/loading.gif';
import { addNewProject, resetStatusProject } from '../../../redux/slices/projectSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { DataStatus, IProjectForm } from '../../../utils/interfaces';

const AddProject = () => {
  const dispatch = useAppDispatch();
  const { project: newProject, statusNewProject: statusNewProject } = useAppSelector(
    (state) => state.projects,
  );
  const [project, setProject] = useState<IProjectForm>({
    title: '',
    description: '',
    fullDescription: '',
    image: new File([], 'No File Chosen'),
    liveLink: '',
    backendLink: '',
  });
  const [imageError, setImageError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project.image.size) {
      setImageError(true);
      setTimeout(() => setImageError(false), 1000);
      return;
    }
    try {
      dispatch(addNewProject(project));
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (statusNewProject == DataStatus.FAILED) {
      setTimeout(() => dispatch(resetStatusProject()), 2000);
    } else if (statusNewProject == DataStatus.SUCCESS) {
      setTimeout(() => dispatch(resetStatusProject()), 2000);
      setProject({
        title: '',
        description: '',
        fullDescription: '',
        image: new File([], 'placeholder.txt'),
        liveLink: '',
        backendLink: '',
        githubAll: '',
        githubClient: '',
        githubServer: '',
      });
    }
  }, [statusNewProject]);

  return (
    <div className="add-project">
      <div className="header">
        <h2>Add New Project</h2>
      </div>
      <form onSubmit={handleSubmit}>
        {statusNewProject === 'LOADING' && (
          <div className="loading">
            <img src={loading} alt="Loading..." />
          </div>
        )}
        {statusNewProject === 'FAILED' && (
          <div className="error">Failed to create project, please try again.</div>
        )}
        {statusNewProject === 'SUCCESS' && (
          <div className="success">{`Project created successfully: ${newProject?.title}`}</div>
        )}
        {statusNewProject === DataStatus.IDLE && (
          <>
            <TextField
              id="title"
              label="Project Title"
              value={project.title}
              variant="filled"
              onChange={(e) => setProject({ ...project, title: e.target.value })}
              required
              size="small"
            />
            <TextField
              id="description"
              label="Project Description"
              value={project.description}
              onChange={(e) => setProject({ ...project, description: e.target.value })}
              variant="filled"
              required
              size="small"
            />
            <TextField
              label="Project Live Link"
              id="liveLink"
              value={project.liveLink}
              onChange={(e) => setProject({ ...project, liveLink: e.target.value })}
              required
              variant="filled"
              size="small"
            />
            <TextField
              id="backendLink"
              label="Backend Server Link"
              value={project.backendLink}
              variant="filled"
              onChange={(e) => setProject({ ...project, backendLink: e.target.value })}
              size="small"
            />
            <TextField
              id="fullDescription"
              value={project.fullDescription}
              label="Full Description"
              multiline
              rows={3}
              variant="filled"
              onChange={(e) => setProject({ ...project, fullDescription: e.target.value })}
              required
              size="small"
            />
            <TextField
              id="githubClient"
              label="Github Client Link"
              value={project.githubClient}
              variant="filled"
              onChange={(e) => setProject({ ...project, githubClient: e.target.value })}
              size="small"
            />
            <TextField
              id="githubServer"
              label="Github Server Link"
              value={project.githubServer}
              variant="filled"
              onChange={(e) => setProject({ ...project, githubServer: e.target.value })}
              size="small"
            />
            <TextField
              id="githubAll"
              label="Github All Link"
              value={project.githubAll}
              variant="filled"
              onChange={(e) => setProject({ ...project, githubAll: e.target.value })}
              size="small"
            />
            <div className="image">
              <p
                className={
                  project.image.size
                    ? ''
                    : imageError
                    ? 'no-file-chosen error-blinking'
                    : 'no-file-chosen'
                }
              >
                {project.image.name}
              </p>
              <Button component="label" variant="outlined">
                Project Image +
                <input
                  hidden
                  type="file"
                  multiple
                  onChange={(e) =>
                    setProject({
                      ...project,
                      image: e.target.files ? e.target.files[0] : new File([], ''),
                    })
                  }
                />
              </Button>
            </div>
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              Save Project
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default AddProject;
