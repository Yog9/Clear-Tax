import React, { useState } from "react";
import ListTask from "./ListTask";

const Board = ({ tasks, editTask, deleteTask, showModal, title, addTaskType }) => {
    const handleAdd = ()=>{
        addTaskType(title);
        showModal();
    }
    
    return (
    <div className="board">
      <h3>{title}</h3>
      <ListTask tasks = {tasks} 
                editTask = {editTask} 
                deleteTask={deleteTask} 
      />
      <button className="button_styles" onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default Board;
