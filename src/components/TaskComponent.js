import React from "react";

const TaskComponent = ({ task, deleteTask, editTask}) => {
  const handleEdit = (task) => {
    editTask(task);
  };
  const handleDelete = (id,state) => {
    deleteTask(id,state);
  }
  return (
    <div className="task_element">
      <div>{task.name}</div>
      <button onClick={() => handleEdit(task)}>Edit</button>
      <button onClick={() => handleDelete(task.id, task.state)}>  X </button>
    </div>
  );
};

export default TaskComponent;
