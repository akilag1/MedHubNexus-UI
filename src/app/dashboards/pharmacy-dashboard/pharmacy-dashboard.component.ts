import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-dashboard',
  templateUrl: './pharmacy-dashboard.component.html',
  styleUrls: ['./pharmacy-dashboard.component.css']
})
export class PharmacyDashboardComponent implements OnInit {

  public pharmacyName:string = "Pharmacy"
  public pageTitle:string = "HOME";

  constructor() { }

  ngOnInit(): void {
  }

  onClickList(value:any){
    this.pageTitle = value['textContent'];
  }

}
