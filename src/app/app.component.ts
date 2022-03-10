import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  name: string = 'Todo App';

  filter?: 'all' | 'done' | 'pending' = 'all';

  // Variables
  task: string = '';
  tasks = [
    { id: 1, task: 'Task #1', done: false },
    { id: 2, task: 'Task #2', done: false }
  ];

  get filterTaks() {
    if (this.filter === 'all') {
      return this.tasks;
    } else {
      return this.tasks.filter(task => task.done);
    }
  }

  setTask(done: boolean = false) {
    this.tasks.push({
      id: this.tasks.length + 1,
      task: this.task,
      done
    })
  }
}
