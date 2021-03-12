import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  subDisplayText = ''; 
  mainDisplayText = '';
  operand1: number;
  operand2: number;
  operator = '';

}
