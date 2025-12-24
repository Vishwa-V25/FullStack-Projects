import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export const useProjects = () => {
  const { projects, dispatch } = useContext(ProjectContext);

  const addProject = (name) => {
    const newProject = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
      tasks: []
    };

    dispatch({
      type: "ADD_PROJECT",
      payload: newProject
    });

    return newProject.id; // 🔥 IMPORTANT
  };

  const updateProject = (project) => {
    dispatch({
      type: "UPDATE_PROJECT",
      payload: project
    });
  };

  return { projects, addProject, updateProject };
};
