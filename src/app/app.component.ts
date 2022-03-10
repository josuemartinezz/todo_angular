import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  name: string = 'Todo App';

  // Variables
  filter?: 'all' | 'done' | 'pending' = 'all';
  task: string = '';
  tasks = [
    { id: 1, task: 'Task #1', done: true },
    { id: 2, task: 'Task #2', done: false }
  ];

  // Methods
  get filterTaks() {
    if (this.filter === 'all') {
      return this.tasks;
    } else {
      return this.tasks.filter(task => task.done);
    }
  }

  setTask(done: boolean = false) {
    if (!this.task) return
    this.tasks.push({
      id: this.tasks.length + 1,
      task: this.task,
      done
    })
    this.task = '';
  }

  changeStatus(event: any) {
    console.log(event)
    this.tasks = this.tasks.map(task => task.id === event.id ? {...task, done: !event.done}: task);
  }
}
