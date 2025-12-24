import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { startTask, endTask } from "../hooks/useTimer";
import TaskItem from "./TaskItem";

export default function TaskBoard({ project }) {
  const { addTask, updateTask } = useTasks(project);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (!taskName.trim()) return;
    addTask(taskName.trim());
    setTaskName("");
  };

  return (
    <div className="task-board">
      {/* Workspace Header */}
      <div className="workspace-header">
        <h2 className="project-title">{project.name}</h2>

        <div className="task-input">
          <input
            placeholder="New task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddTask();
            }}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>

      {/* Tasks */}
      <div className="tasks">
        {project.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={updateTask}
            onStart={() => updateTask(startTask(task))}
            onEnd={() => updateTask(endTask(task))}
          />
        ))}
      </div>
    </div>
  );
}
