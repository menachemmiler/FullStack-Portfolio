import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/slices/userSlice";
import { DataStatus, IProjectForm } from "../../utils/interfaces";
import {
  addNewProject,
  resetStatusNewProject,
} from "../../redux/slices/projectSlice";
import EditProjects from "./editProjects";
import AddProject from "./addProject";

const ProjectManagement = () => {
  const dispatch = useAppDispatch();
  const { error, status, user } = useAppSelector((state) => state.user);
  const { newProject, statusNewProject } = useAppSelector(
    (state) => state.projects
  );
  const [project, setProject] = useState<IProjectForm>({
    title: "",
    description: "",
    fullDescription: "",
    image: new File([], "No File Chosen"),
    liveLink: "",
    backendLink: "",
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
        githubAll: "",
        githubClient: "",
        githubServer: "",
      });
    }
  }, [statusNewProject]);

  if (status == DataStatus.LOADING) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (user) {
    return (
      <div className="page">
        <div className="project-management">
          <div className="header">
            <h1>Hello {user.username}</h1>
          </div>
          <div className="main">
            <AddProject
              handleSubmit={handleSubmit}
              project={project}
              setProject={setProject}
              imageError={imageError}
            />
            <EditProjects />
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectManagement;
