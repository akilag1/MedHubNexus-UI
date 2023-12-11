import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-home-box',
  templateUrl: './dash-home-box.component.html',
  styleUrls: ['./dash-home-box.component.css']
})
export class DashHomeBoxComponent implements OnInit {

  @Input('boxTitle') boxTitle:string = "";
  @Input('boxValue') boxValue:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
