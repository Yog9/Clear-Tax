import tasks from "./tasks";
import "./App.css";
import { useState } from "react";
import { TaskType } from "./TaskType";
import Modal from "./components/Modal";
import Board from "./components/Board";

function App() {
  const [show, setShow] = useState(false);
  const [plannedState, setPlannedState] = useState(
    tasks.filter((t) => t.state === TaskType.Todo)
  );
  const [startedState, setStartedState] = useState(
    tasks.filter((t) => t.state === TaskType.InProgress)
  );
  const [doneState, setDoneState] = useState(
    tasks.filter((t) => t.state === TaskType.Done)
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currTask, setCurrTask] = useState();
  const [taskType, setTaskType] = useState();

/**
 * Shows the modal
 */
  const showModal = () => {
    setShow(true);
  };

/**
 * Hides the modal also sets isEditing to
 * false
 */
  const hideModal = () => {
    setShow(false);
    setIsEditing(false);
  };
  
  /**
   * Adds a task to the respective state
   * @param {Object} task
   */
  const addTask = (task) => {
    switch (task.state) {
      case TaskType.Todo:
        setPlannedState([...plannedState, task]);
        break;

      case TaskType.InProgress:
        setStartedState([...startedState, task]);
        break;

      case TaskType.Done:
        setDoneState([...doneState, task]);
        break;
      default:
      // Do nothing
    }
  };

/**
 * It updates the updated task in given task
 * list and sets it into respective state.
 * @param {*} updatedTask 
 * @param {Array} taskList 
 * @param {Function} setState 
 */
  const setUpdatedTaskList = (updatedTask, taskList, setState) => {
    const updatedTaskList = taskList.map(task => task.id === updatedTask.id ? updatedTask : task);
    setState(updatedTaskList);
  };

/**
 * Handles edit functionality of  the task
 * case 1 : when name change we only 
 * update the task in the state
 * case 2 : when we change both the name and tasktype
 * so in this case we remove the current task 
 * and add the updated task in the task list
 * 
 * @param {Object} updatedTask 
 */
  const updateTask = (updatedTask) => {
    if (updatedTask.state === currTask.state) {
      switch (updatedTask.state) {
        case TaskType.Todo:
          setUpdatedTaskList(updatedTask, plannedState, setPlannedState);
          break;
        case TaskType.InProgress:
          setUpdatedTaskList(updatedTask, startedState, setStartedState);
          break;
        case TaskType.Done:
          setUpdatedTaskList(updatedTask, doneState, setDoneState);
          break;
        default:
          console.log("came in default");
      }
    } else {
      // Delete task from old state => currTask.state
      deleteTask(currTask.id, currTask.state);

      // Add task to new state => updatedTask.state
      addTask(updatedTask);
    }
  };

  /**
   * This just enables the modal to open in edit state. 
   * @param {Object} task
   */
  const showEditModal = (task) => {
    setIsEditing(true);
    setCurrTask(task);
    setShow(true);
  };

/**
 * It helps to set the tasktype 
 * as soon as the modal opens in create scenario
 * @param {String} taskType 
 */
  const addTaskType = (taskType) => {
    setTaskType(taskType);
  };

/**
 * Deletes a task based on id and tasktype
 * @param {String} id 
 * @param {String} state 
 */
  const deleteTask = (id, state) => {
    let tasks;
    switch (state) {
      case TaskType.Todo:
        tasks = plannedState;
        break;
      case TaskType.InProgress:
        tasks = startedState;
        break;
      case TaskType.Done:
        tasks = doneState;
        break;
    }
    const filteredTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    switch (state) {
      case TaskType.Todo:
        setPlannedState(filteredTaskList);
        break;
      case TaskType.InProgress:
        setStartedState(filteredTaskList);
        break;
      case TaskType.Done:
        setDoneState(filteredTaskList);
        break;
    }
  };

  /**
   * Modal UI Component would be only shown
   * when show state is true
   */
  const modalUI = show ? (
    <Modal
      handleClose={hideModal}
      addTask={addTask}
      isEditing ={isEditing}
      currTask={currTask}
      updateTask={updateTask}
      setTaskType = {setTaskType}
      taskType = {taskType}
    />
  ) : null;

  return (
    <>
      <h2 className="heading">Kanban Board</h2>
      <div className="container">
        {Object.keys()}
        <Board
          tasks = {plannedState}
          title = {TaskType.Todo}
          showEditModal = {showEditModal}
          deleteTask = {deleteTask}
          showModal = {showModal}
          addTaskType = {addTaskType}
        />
        <Board
          tasks={startedState}
          title={TaskType.InProgress}
          showEditModal = {showEditModal}
          deleteTask={deleteTask}
          showModal={showModal}
          addTaskType = {addTaskType}
        />
        <Board
          tasks={doneState}
          title={TaskType.Done}
          showEditModal = {showEditModal}
          deleteTask={deleteTask}
          showModal={showModal}
          addTaskType = {addTaskType}
        />
        {modalUI}
      </div>
    </>
  );
}

export default App;
