import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/task';
import { addTask, deleteTask, editTask } from 'src/app/store/todo/todo.actions';

// Types ✅
type Colors = {
  html: string,
  selected: boolean
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor(private store: Store<any>) {
    store.select('todo').subscribe(({ tasks }) => {
      this.tasks = tasks
    })
  }

  ngOnInit(): void { }

  task: string = '';

  /* Task Logic 👌 */
  /**
   *
   * @param done - Task object to add.
   */
  setTask(done: boolean = false) {
    if (!this.task) return;
    let task: Task = { id: this.tasks.length + 1, task: this.task, done, colors: this.getColors };
    this.store.dispatch(addTask(task));

    this.task = '';
    this.colors = this.colors.map(color => ({...color, selected: false}));
  }

  /**
   *
   * @param event - Task object to edit.
   */
  editTask(event: any) {
    this.store.dispatch(editTask(event))
  }

  /**
   *
   * @param event - Task object to delete.
   */
  deleteTask(event: any) {
    this.store.dispatch(deleteTask(event))
  }
  /* End of Task Logic 👌 */

  /* Colors logic */
  get getColors() {
    return this.colors.map((color: Colors) => color.selected ? color.html : '').filter(Boolean);
  }

  isShowColors?: boolean = false;
  colors: Colors[] = [
    { html: '61BD4F', selected: false },
    { html: 'F2D600', selected: false },
    { html: 'FF9F1A', selected: false },
    { html: 'EB5A46', selected: false },
    { html: 'C377E0', selected: false },
    { html: '0079BF', selected: false }
  ];

  showColors() {
    this.isShowColors = !this.isShowColors;
  }

  setColor(c: any) {
    this.colors = this.colors.map(color => color.html === c.html ? {...color, selected: !color.selected}: color);
  }

}
