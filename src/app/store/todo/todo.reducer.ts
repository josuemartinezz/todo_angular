import { createReducer, on } from "@ngrx/store";
import { Task } from "src/app/models/task";
import { addTask, deleteTask, editTask, retrieveTasks } from "./todo.actions";

export const initalState: { tasks: Array<Task>, loading: boolean } = {
  tasks: [
    { id: 1, task: 'Test Task #1 💫', done: true, colors: ['61BD4F', 'C377E0'] },
    { id: 2, task: 'Angular Learning 💡', done: false, colors: [] }
  ],
  loading: false
};

export const todoReducer = createReducer(
  initalState,
  on(addTask, (state, task) => {
    return { ...state, tasks: [...state.tasks, task] };
  }),
  on(editTask, (state, event: Task) => {
    let tasks: Array<Task> = state.tasks.map(task => task.id === event.id ? {...task, done: !event.done}: task);
    return { ...state, tasks: [ ...tasks ] }
  }),
  on(deleteTask, (state, event: Task) => {
    let tasks: Array<Task> = state.tasks.filter(task => task.id !== event.id)
    return { ...state, tasks: [ ...tasks ] }
  })
);
