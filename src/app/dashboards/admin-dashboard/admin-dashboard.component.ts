import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public adminName:string = "Admin"
  public pageTitle:string = "HOME";
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickList(value:any){
    this.pageTitle = value['textContent'];
  }

}
