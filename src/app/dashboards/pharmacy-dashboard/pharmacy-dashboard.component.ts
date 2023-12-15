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

    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    const lastPart = pathParts.pop();
    if(lastPart!=undefined && pathParts.length>1){
      this.pageTitle = lastPart.toUpperCase();
    }

  }

  onClickList(value:any){
    this.pageTitle = value['textContent'];
  }

}
