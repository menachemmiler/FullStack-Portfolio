import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProfile } from "../../redux/slices/userSlice";
import { IProjectForm } from "../../utils/interfaces";

const Test = () => {
  const dispatch = useAppDispatch();
  const { user: user } = useAppSelector((state) => state.user);
  // const { projects: projects } = useAppSelector((state) => state.projects);
  const [project, setProject] = useState<IProjectForm>({
    title: "",
    description: "",
    fullDescription: "",
    image: "",
    liveLink: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("Authorization")!,
        },
        body: JSON.stringify(project),
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
    // To check if it is already connected
    dispatch(getProfile());
  }, []);

  if (user) {
    return (
      <>
        <h1>hello {user.username}</h1>
        <input
          type="text"
          placeholder="Project Title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Project Description"
          value={project.description}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Project Full Description"
          value={project.fullDescription}
          onChange={(e) =>
            setProject({ ...project, fullDescription: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Project Image"
          value={project.image}
          onChange={(e) => setProject({ ...project, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Project Live Link"
          value={project.liveLink}
          onChange={(e) => setProject({ ...project, liveLink: e.target.value })}
        />
        <button onClick={handleSubmit}>Create Project</button>
        {/* <div>{JSON.stringify(projects)}</div> */}
        {/* <div>{JSON.stringify(user)}</div> */}
      </>
    );
  }

  return <div>את זה רק מנהל יכול לראות</div>;
};

export default Test;
