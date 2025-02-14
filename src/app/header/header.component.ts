import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginPageComponent } from '../login-page/user-login-page/user-login-page.component';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  isCustomerUser = false;
  isPharmacyUser = false;
  isHome = true;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public activatedRouter: ActivatedRoute,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRouter.snapshot.url.toString())
    if (
      this.activatedRouter.snapshot.url.toString() == ''
    ) {
      this.isHome = true;
      this.isCustomerUser = false;
      this.isAdmin = false;
      this.isPharmacyUser = false;
    } else {
      if (this.activatedRouter.snapshot.url.toString().includes('admin')) {
        this.isAdmin = true;
        this.isPharmacyUser = false;
        this.isCustomerUser = false;
        this.isHome = false;
      }
      else if(this.loginService.userRole == 'CUSTOMER') {
        this.isCustomerUser = true;
        this.isAdmin = false;
        this.isPharmacyUser = false;
        this.isHome = false;
      } else if(this.activatedRouter.snapshot.url.toString().includes('pharmacy')) {
        this.isPharmacyUser = true;
        this.isCustomerUser = false;
        this.isAdmin = false;
        this.isHome = false;
      }
    }
  }

  onLogBtnPressed() {
    const dialogRef = this.dialog.open(UserLoginPageComponent, {
      height: '600px',
      width: '650px',
      panelClass: 'log-reg-container',
    });
  }

  onPrescriptionClick() {
    const dialogRef = this.dialog.open(PrescriptionComponent, {
      width: '550px',
    });
  }

  onLogOut() {
    this.loginService.logOut();
    this.router.navigate(['']);
  }

  onProfile() {
    this.router.navigate([
      this.loginService.userRole == 'ADMIN'
        ? 'admin-dashboard'
        : this.loginService.userRole == 'CUSTOMER'
        ? 'customer-dashboard'
        : 'pharmacy-dashboard',
    ]);
  }

  viewHome() {
    if (this.isAdmin) {
      this.router.navigate(['admin-dashboard']);
    } else if (this.isCustomerUser) {
      this.router.navigate(['customer-dashboard']);
    } else {
      this.router.navigate(['pharmacy-dashboard']);
    }
  }
}
