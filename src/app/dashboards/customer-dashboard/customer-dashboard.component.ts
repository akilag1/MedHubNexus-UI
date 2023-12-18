import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

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
