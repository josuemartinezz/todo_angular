import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

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

  constructor() { }

  ngOnInit(): void {
  }

  task: string = '';
  tasks: Array<Task> = [
    { id: 1, task: 'Test Task #1 💫', done: true, colors: ['61BD4F', 'C377E0'] },
    { id: 2, task: 'Angular Learning 💡', done: false, colors: [] }
  ];

  /* Task Logic 👌 */
  /**
   *
   * @param done - Task object to add.
   */
  setTask(done: boolean = false) {
    if (!this.task) return
    this.tasks.push({
      id: this.tasks.length + 1,
      task: this.task,
      done,
      colors: this.getColors
    })
    this.task = '';
    this.colors = this.colors.map(color => ({...color, selected: false}));
  }

  /**
   *
   * @param event - Task object to edit.
   */
  editTask(event: any) {
    this.tasks = this.tasks.map(task => task.id === event.id ? {...task, done: !event.done}: task);
  }

  /**
   *
   * @param event - Task object to delete.
   */
  deleteTask(event: any) {
    this.tasks = this.tasks.filter(task => task.id !== event.id);
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
