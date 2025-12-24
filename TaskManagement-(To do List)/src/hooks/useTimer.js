export const startTask = task => ({
  ...task,
  status: "IN_PROGRESS",
  startTime: new Date().toISOString()
});

export const endTask = task => {
  const end = new Date();
  const start = new Date(task.startTime);

  return {
    ...task,
    status: "COMPLETED",
    endTime: end.toISOString(),
    duration: Math.floor((end - start) / 60000)
  };
};
