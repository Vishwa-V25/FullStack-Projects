import { formatTime } from "../utils/time";

export default function TaskItem({ task, onUpdate, onStart, onEnd }) {
  return (
    <div className="task-card">
      <input
        className="task-title"
        value={task.title}
        onChange={e =>
          onUpdate({ ...task, title: e.target.value })
        }
      />

      <div className="task-meta">
        <span>Status: {task.status}</span>

        {task.startTime && (
          <span>Start: {formatTime(task.startTime)}</span>
        )}

        {task.endTime && (
          <span>End: {formatTime(task.endTime)}</span>
        )}

        {task.duration > 0 && (
          <span>Duration: {task.duration} min</span>
        )}
      </div>

      <div className="task-actions">
        {!task.startTime && <button onClick={onStart}>Start</button>}
        {task.startTime && !task.endTime && <button onClick={onEnd}>End</button>}
      </div>
    </div>
  );
}
