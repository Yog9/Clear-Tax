import {TaskType as TaskType} from './TaskType';
import { v4 as uuidv4 } from "uuid";

const tasks = [
  {
    name: "XYZ",
    date: "23-09-2023",
    state: TaskType.Todo,
    id: uuidv4(),
  },
  {
    name: "Learn Java",
    date: "23-09-2023",
    state: TaskType.Todo,
    id: uuidv4(),
  },
  {
    name: "Running",
    date: "23-09-2023",
    state: TaskType.InProgress,
    id: uuidv4(),
  },
  {
    name: "Swimming",
    date: "23-09-2023",
    state: TaskType.InProgress,
    id: uuidv4(),
  },
  {
    name: "Watching TV",
    date: "23-09-2023",
    state: TaskType.Done,
    id: uuidv4(),
  },
  {
    name: "Dancing",
    date: "23-09-2023",
    state: TaskType.Done,
    id: uuidv4(),
  },
];

export default tasks;
