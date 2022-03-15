import React from "react";
import ListTask from "./ListTask";

const Board = ({ tasks, showEditTask, deleteTask, showModal, title, addTaskType }) => {
  /**
   * Sets the task type in dropdown
   * when you 
   * open the modal 
   */  
  const handleAdd = () => {
        addTaskType(title);
        showModal();
    };
    
    return (
      <div className="board">
        <h3> {title} </h3>
        <ListTask tasks = {tasks} 
                  showEditTask = {showEditTask} 
                  deleteTask = {deleteTask} 
        />
        <button className = "button_styles" onClick = {handleAdd}>
          +
        </button>
      </div>
  );
};

export default Board;
