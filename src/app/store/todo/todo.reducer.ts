import { createReducer, on } from "@ngrx/store";
import { Task } from "src/app/models/task";
import { addTask, retrieveTasks } from "./todo.actions";

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
  })
);
