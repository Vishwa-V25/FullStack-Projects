import { useProjects } from "./useProjects";

export const useTasks = project => {
  const { updateProject } = useProjects();

  const addTask = title => {
    updateProject({
      ...project,
      tasks: [
        ...project.tasks,
        {
          id: crypto.randomUUID(),
          title,
          status: "PENDING",
          startTime: null,
          endTime: null,
          duration: 0
        }
      ]
    });
  };

  const updateTask = updatedTask => {
    updateProject({
      ...project,
      tasks: project.tasks.map(t =>
        t.id === updatedTask.id ? updatedTask : t
      )
    });
  };

  return { addTask, updateTask };
};
