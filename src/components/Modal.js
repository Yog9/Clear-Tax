import React, { useEffect } from "react";
import { TaskType as TaskType } from "../TaskType";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ handleClose, addTask, isEditing, currTask, updateTask, taskType}) => {
  const [taskName, setTaskName] = React.useState("");
  const [state, setState] = React.useState(taskType);
/**
 * If we are editing 
 * As soon as the component mounts
 * we want to set the taskname and the state of task
 */
  useEffect(() => {
    if(isEditing){
      setTaskName(currTask.name);
      setState(currTask.state);
    }
},[]);

/**
 * this function is called as soon
 * as we click the save button in modal
 * It has two scenarios
 * 1.If we are editing we call updateTask() with
 * updatedObject
 * 2. Else we add a task
 * @param {Object} e 
 * @returns null
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;
    if(!isEditing){
      const newTask = { name: taskName, id: uuidv4(), date: Date.now(), state };
      addTask(newTask);
    }
    else {
      const updatedTask = {
        ...currTask,
        name : taskName,
        state : state,
      }
      updateTask(updatedTask);
    }
    handleClose();
  };

/**
 * Called on Onchange of dropdown to set the
 * state of taskType
 * @param {Object} e 
 */
  const handleState = (e) => {
    setState(e.target.value);
  };

  const heading = isEditing ? (<h4 className="heading">Edit Mode</h4>) : (<h4 className="heading">Create Mode</h4>);
  return (
    <div className = "modal">
      <div className = "modal-main">
      {heading}
        <form className = "form" onSubmit = {handleSubmit}>
          <input
            type = "text"
            placeholder = "add a task"
            value = {taskName}
            onChange = {(e) => setTaskName(e.target.value)}
          />
          <select value = {state} onChange = {handleState}>
            {Object.keys(TaskType).map((key) => (
              <option key = {uuidv4()} value = {TaskType[key]}>
                {TaskType[key]}
              </option>
            ))}
          </select>
        </form>
        <div className = "button-grp">
          <button onClick = {handleSubmit}> Save the Task </button>
          <button onClick = {handleClose}> close </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
