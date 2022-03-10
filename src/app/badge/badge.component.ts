import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent implements OnInit {

  constructor() { }

  @Input() content?: string;

  ngOnInit(): void {
  }

}
