import { Component, OnInit } from '@angular/core';
import { PharmacyInfo } from 'src/app/models/pharmacy-info';
import { UserView } from 'src/app/models/user-view';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-pharmacy-dashboard',
  templateUrl: './pharmacy-dashboard.component.html',
  styleUrls: ['./pharmacy-dashboard.component.css']
})
export class PharmacyDashboardComponent implements OnInit {

  public pharmacyName:string = "Pharmacy"
  public pageTitle:string = "HOME";
  _userProfile!: UserView;
  pharmacyInfo!: PharmacyInfo;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    const lastPart = pathParts.pop();
    if(lastPart!=undefined && pathParts.length>1){
      this.pageTitle = lastPart.toUpperCase();
    }
    this.getUser();

  }

  getUser(){
    const userProfile = this.loginService.userProfile;
    if (userProfile) {
      this._userProfile = userProfile;
      this.pharmacyInfo = this._userProfile.pharmacyInfo;
      //this.getPharmacyInfo();
    } else {
      // @ts-ignore
      this._userProfile = null;
    }
  }

  onClickList(value:any){
    this.pageTitle = value['textContent'];
  }

}
