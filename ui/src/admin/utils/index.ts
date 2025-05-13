import { api } from "../../utils/axios";
import { IProject } from "../../utils/interfaces";

//create new project
export const createNewProject = async (project: IProject) => {
  try {
    const token = localStorage.getItem("authorization");
    if (token) {
      api.defaults.headers.common["Authorization"] = `${token}`;
    }
    const response = await api.post("/api/projects", project);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
