export default function Dashboard({ tasks }) {
  const totalTime = tasks.reduce((a, t) => a + t.duration, 0);

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <p>Total Tasks: {tasks.length}</p>
      <p>Total Time: {totalTime} mins</p>
    </div>
  );
}
