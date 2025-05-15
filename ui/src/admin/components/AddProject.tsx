import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/slices/userSlice";
import { DataStatus, IProjectForm } from "../../utils/interfaces";

const AddProject = () => {
  const dispatch = useAppDispatch();
  const { error, status, user } = useAppSelector((state) => state.user);
  // const { projects: projects } = useAppSelector((state) => state.projects);
  const [project, setProject] = useState<IProjectForm>({
    title: "",
    description: "",
    fullDescription: "",
    image: new File([], "placeholder.txt"),
    liveLink: "",
    backendLink: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log({ project });
      const formData = new FormData();
      formData.append("title", project.title);
      formData.append("description", project.description);
      formData.append("fullDescription", project.fullDescription);
      formData.append("image", project.image);
      formData.append("liveLink", project.liveLink);
      formData.append(
        "backendLink",
        project.backendLink ? project.backendLink : ""
      );
      console.log({ formData });
      const res = await fetch("http://localhost:4000/api/projects", {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("Authorization")!,
        },
        body: formData,
      });
      if (res.status != 201) {
        throw new Error("Can't create project, please try again");
      }
      const data = await res.json();
      console.log({ data });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  if (status == DataStatus.LOADING) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (user) {
    return (
      <div className="page">
        <div className="add-project">
          <h1>
            Hello {user.username}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) =>
                  setProject({ ...project, title: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Project Description"
                value={project.description}
                onChange={(e) =>
                  setProject({ ...project, description: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Project Full Description"
                value={project.fullDescription}
                onChange={(e) =>
                  setProject({ ...project, fullDescription: e.target.value })
                }
                aria-atomic
                required
              />
              <input
                type="file"
                placeholder="Project Image"
                onChange={(e) =>
                  setProject({
                    ...project,
                    image: e.target.files
                      ? e.target.files[0]
                      : new File([], ""),
                  })
                }
                required
              />
              <input
                type="text"
                placeholder="Project Live Link"
                value={project.liveLink}
                onChange={(e) =>
                  setProject({ ...project, liveLink: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Project Backend Link"
                value={project.backendLink}
                onChange={(e) =>
                  setProject({ ...project, backendLink: e.target.value })
                }
              />
              <button type="submit">Create Project</button>
            </form>
          </h1>
        </div>
      </div>
    );
  }
};

export default AddProject;
