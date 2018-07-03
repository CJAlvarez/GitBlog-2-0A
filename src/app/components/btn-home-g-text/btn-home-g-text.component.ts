import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-home-g-text',
  templateUrl: './btn-home-g-text.component.html',
  styleUrls: ['./btn-home-g-text.component.scss']
})
export class BtnHomeGTextComponent implements OnInit {
  
  clickMessage = '';  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clickMessage = 'Done';
  }
}
