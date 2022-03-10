import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  name: string = 'Todo App';

  // Variables
  task: string = '';
  tasks = [
    { id: 1, task: 'Test Task #1 💫', done: true },
    { id: 2, task: 'Angular Learning 💡', done: false }
  ];

  setTask(done: boolean = false) {
    if (!this.task) return
    this.tasks.push({
      id: this.tasks.length + 1,
      task: this.task,
      done
    })
    this.task = '';
  }

  editTask(event: any) {
    this.tasks = this.tasks.map(task => task.id === event.id ? {...task, done: !event.done}: task);
  }

  deleteTask(event: any) {
    this.tasks = this.tasks.filter(task => task.id !== event.id);
  }
}
