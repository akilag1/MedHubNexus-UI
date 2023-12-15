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
