import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})

export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this)
  }

  onClick(){ console.log('Clicked')}

}
