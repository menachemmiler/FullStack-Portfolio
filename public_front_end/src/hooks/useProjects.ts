import { useEffect, useState } from "react";
import { IProject } from "../utils/interfaces";
import { api } from "../utils/axios";

export const useProjects = () => {
  const [projects, setProjects] = useState<IProject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get(`/api/projects`);
        if (!response.data) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.data;
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if(projects){
    console.log({projects})
  }

  return { projects, loading, error };
};
