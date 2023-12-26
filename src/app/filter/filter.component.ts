import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public disabled:boolean = false;
  public max:number = 100;
  public min:number = 0;
  public showTicks:boolean = false;
  public step:number = 1;
  public thumbLabel:boolean = false;
  public value:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // formatLabel(value: number): string {
  //   console.log("inside format label")
  //   if (value >= 1000) {
  //     console.log(Math.round(value / 1000) + 'k');
  //     return Math.round(value / 1000) + 'k';
  //   }
  //   return `${value}`;
  // }

}
