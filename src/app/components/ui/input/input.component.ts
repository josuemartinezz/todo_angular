import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})

export class InputComponent implements OnInit {

  constructor() { }

  //Props
  @Input() placeholder?: string;
  @Input() type?: string = 'text';
  @Input() value?: string;
  @Output() valueChange = new EventEmitter<string>();

  ngOnInit(): void { }
}
