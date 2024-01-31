import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginPageComponent } from '../login-page/user-login-page/user-login-page.component';
import { CommonService } from '../services/common-service';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAdmin:boolean = false;
  public loginStatusSubscription: Subscription | null = null;
  public loginStatus:boolean = false;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    console.log("Header started")

    if(this.authService.isLoggedIn()){
      this.loginStatus = true;
    }

    this.loginStatusSubscription = this.authService.getLoginStatusClicked().subscribe((status)=>{
      this.loginStatus = status;
    })

  }

  onLogBtnPressed(){
    const dialogRef = this.dialog.open(UserLoginPageComponent, {
      height: '520px',
      width: '650px',
      panelClass: 'log-reg-container'
    });
  }

  onPrescriptionClick(){
    const dialogRef = this.dialog.open(PrescriptionComponent, {
      width:'550px'
    });
  }

  onCartClick(){
    this.router.navigate(['cart']);
  }

  onSignoutClick(){
    this.authService.removeToken();
    this.authService.setLoginStatusClicked(false);
  }

  ngOnDestroy(){
    if (this.loginStatusSubscription != null) {
      this.loginStatusSubscription.unsubscribe();
    }
  }

}
