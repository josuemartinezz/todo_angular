import { createAction, props } from "@ngrx/store";
import { Task } from "src/app/models/task";

export const retrieveTasks = createAction(
  '[Task] Retrieve Tasks',
);

export const addTask = createAction(
  '[Task] Add Task',
  props<Task>()
);
