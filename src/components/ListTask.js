import React from "react";
import TaskComponent from "./TaskComponent";


const ListTask = ({ tasks, editTask, deleteTask }) => {
  const task = tasks.map(task => 
                            <TaskComponent
                              task = {task}
                              key = {task.id} 
                              editTask = {editTask} 
                              deleteTask = {deleteTask}
                            />);
  return <div>{task}</div>;
};

export default ListTask;
