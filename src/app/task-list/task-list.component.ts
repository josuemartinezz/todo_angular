import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  constructor() { }

  @Input() name: string = 'Unnamed Task';

  ngOnInit(): void {
  }

}
