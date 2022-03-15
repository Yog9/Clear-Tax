import React from "react";

const TaskComponent = ({ task, deleteTask, showEditModal}) => {
  /**
   * Shows the edit modal with current task
   * @param {Object} task 
   */
  const handleEdit = (task) => {
    showEditModal(task);
  };

  /**
   * Deletes a task based on id and tasktype.
   * @param {String} id 
   * @param {String} state 
   */
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
