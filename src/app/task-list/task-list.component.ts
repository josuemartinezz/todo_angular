import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  constructor() { }

  @Input() task: any = {};
  @Output() changeStatus = new EventEmitter<any>();

  // Methods
  onClick() {
    this.changeStatus.emit(this.task);
  }

  ngOnInit(): void {
  }

}
