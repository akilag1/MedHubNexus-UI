import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  public customerName!:string
  public pageTitle:string = "HOME";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.customerName = this.loginService.userProfile.customerInfo.fullName;
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
