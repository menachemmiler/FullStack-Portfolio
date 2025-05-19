import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/slices/userSlice";
import { DataStatus, IProjectForm } from "../../utils/interfaces";
import {
  addNewProject,
  resetStatusNewProject,
} from "../../redux/slices/projectSlice";
import { Button, TextField } from "@mui/material";
import { SendIcon } from "lucide-react";

const AddProject = () => {
  const dispatch = useAppDispatch();
  const { error, status, user } = useAppSelector((state) => state.user);
  const { newProject, statusNewProject } = useAppSelector(
    (state) => state.projects
  );
  const [project, setProject] = useState<IProjectForm>({
    title: "",
    description: "",
    fullDescription: "",
    image: new File([], "no file"),
    liveLink: "",
    backendLink: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(addNewProject(project));
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (statusNewProject == DataStatus.FAILED) {
      alert("Can't create project, please try again");
    } else if (statusNewProject == DataStatus.SUCCESS) {
      alert(`Project created successfully: ${newProject?.title}`);
      dispatch(resetStatusNewProject());
      setProject({
        title: "",
        description: "",
        fullDescription: "",
        image: new File([], "placeholder.txt"),
        liveLink: "",
        backendLink: "",
      });
    }
  }, [statusNewProject]);

  if (status == DataStatus.LOADING) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (user) {
    return (
      <div className="page">
        <div className="add-project">
          <div className="header">
            <h1>Hello {user.username}</h1>
          </div>
          <div className="main">
            <div className="left">
              <div className="header">
                <h2>Add New Project</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="title"
                  label="Project Title"
                  value={project.title}
                  variant="filled"
                  onChange={(e) =>
                    setProject({ ...project, title: e.target.value })
                  }
                  required
                  size="small"
                />
                <TextField
                  id="description"
                  label="Project Description"
                  value={project.description}
                  onChange={(e) =>
                    setProject({ ...project, description: e.target.value })
                  }
                  variant="filled"
                  required
                  size="small"
                />
                <TextField
                  label="Project Live Link"
                  id="liveLink"
                  value={project.liveLink}
                  onChange={(e) =>
                    setProject({ ...project, liveLink: e.target.value })
                  }
                  required
                  variant="filled"
                  size="small"
                />
                <TextField
                  id="backendLink"
                  label="Backend Server Link"
                  value={project.backendLink}
                  variant="filled"
                  onChange={(e) =>
                    setProject({ ...project, backendLink: e.target.value })
                  }
                  size="small"
                />
                <TextField
                  id="fullDescription"
                  value={project.fullDescription}
                  label="Full Description"
                  multiline
                  rows={3}
                  variant="filled"
                  onChange={(e) =>
                    setProject({ ...project, fullDescription: e.target.value })
                  }
                  required
                  size="small"
                />
                <Button
                  component="label"
                  role={undefined}
                  variant="outlined"
                  // tabIndex={-1}
                >
                  Project Image +
                  <input
                    hidden
                    type="file"
                    multiple
                    required
                    onChange={(e) =>
                      setProject({
                        ...project,
                        image: e.target.files
                          ? e.target.files[0]
                          : new File([], ""),
                      })
                    }
                  />
                </Button>
                {/* githubClient?: string; 
                githubServer?: string;
                 githubAll?: string; */}
                <TextField
                  id="githubClient"
                  label="Github Client Link"
                  value={project.githubClient}
                  variant="filled"
                  onChange={(e) =>
                    setProject({ ...project, githubClient: e.target.value })
                  }
                  size="small"
                />
                <TextField
                  id="githubServer"
                  label="Github Server Link"
                  value={project.githubServer}
                  variant="filled"
                  onChange={(e) =>
                    setProject({ ...project, githubServer: e.target.value })
                  }
                  size="small"
                />
                <TextField
                  id="githubAll"
                  label="Github All Link"
                  value={project.githubAll}
                  variant="filled"
                  onChange={(e) =>
                    setProject({ ...project, githubAll: e.target.value })
                  }
                  size="small"
                />
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                >
                  Save Project
                </Button>
              </form>
            </div>
            <div className="right">
              vwcgvwhvcw
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AddProject;
