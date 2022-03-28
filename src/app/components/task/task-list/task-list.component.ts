import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  constructor() { }

  @Input() task: any = {};
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  // Methods
  onEdit() {
    this.edit.emit(this.task);
  }

  onDelete() {
    this.delete.emit(this.task);
  }
}
