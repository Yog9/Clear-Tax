import {TaskType as TaskType} from './TaskType';

const tasks = [
  {
    name: "XYZ",
    date: "23-09-2023",
    state: TaskType.Todo,
    id: "1",
  },
  {
    name: "Learn Java",
    date: "23-09-2023",
    state: TaskType.Todo,
    id: "6",
  },
  {
    name: "Running",
    date: "23-09-2023",
    state: TaskType.InProgress,
    id: "2",
  },
  {
    name: "Swimming",
    date: "23-09-2023",
    state: TaskType.InProgress,
    id: "4",
  },
  {
    name: "Watching TV",
    date: "23-09-2023",
    state: TaskType.Done,
    id: "3",
  },
  {
    name: "Dancing",
    date: "23-09-2023",
    state: TaskType.Done,
    id: "5",
  },
];

export default tasks;
