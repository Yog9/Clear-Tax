import React from "react";
import TaskComponent from "./TaskComponent";
/**
 * lists all tasks using taskComponent
 * @param {*} 
 * @returns jsx
 */
const ListTask = ({ tasks, showEditModal, deleteTask }) => {
  const task = tasks.map(task => 
                            <TaskComponent
                              task = {task}
                              key = {task.id} 
                              showEditModal = {showEditModal} 
                              deleteTask = {deleteTask}
                            />);
  return <div>{task}</div>;
};

export default ListTask;
