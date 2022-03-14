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
  const showModal = () => {
    setShow(true);
  };

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
  const getUpdatedTaskList = (updatedTask, taskList, setState) => {
    const updatedTaskList = taskList.map(task => task.id === updatedTask.id ? updatedTask : task);
    setState(updatedTaskList);
  };

  const updateTask = (updatedTask) => {
    if (updatedTask.state === currTask.state) {
      switch (updatedTask.state) {
        case TaskType.Todo:
          getUpdatedTaskList(updatedTask, plannedState, setPlannedState);
          break;
        case TaskType.InProgress:
          getUpdatedTaskList(updatedTask, startedState, setStartedState);
          break;
        case TaskType.Done:
          getUpdatedTaskList(updatedTask, doneState, setDoneState);
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
   * Edits the current task
   * @param {Object} task
   */
  const editTask = (task) => {
    setIsEditing(true);
    setCurrTask(task);
    setShow(true);
  };

  const addTaskType = (taskType) => {
    setTaskType(taskType);
  };

  const deleteTask = (id, state) => {
    let allTasks;
    switch (state) {
      case TaskType.Todo:
        allTasks = plannedState;
        break;
      case TaskType.InProgress:
        allTasks = startedState;
        break;
      case TaskType.Done:
        allTasks = doneState;
        break;
    }
    const filteredTaskList = allTasks.filter((task) => {
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
        <Board
          tasks={plannedState}
          title={TaskType.Todo}
          editTask={editTask}
          deleteTask={deleteTask}
          showModal={showModal}
          addTaskType = {addTaskType}
        />
        <Board
          tasks={startedState}
          title={TaskType.InProgress}
          editTask={editTask}
          deleteTask={deleteTask}
          showModal={showModal}
          addTaskType = {addTaskType}
        />
        <Board
          tasks={doneState}
          title={TaskType.Done}
          editTask={editTask}
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
