import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from "../../services/login.service";
import {ResponseDto} from "../../models/response-dto";
import {UserView} from "../../models/user-view";
import {PopUpComponent} from "../../pop-up/pop-up/pop-up.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  public adminLoginGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.adminLoginGroup = this._formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onLogin() {
    const email = this.adminLoginGroup.value.email;
    const password = this.adminLoginGroup.value.password;
    const userRole = 'ADMIN';
    this.loginService.signIn(email, password, userRole).subscribe((res: ResponseDto) => {
      if (res.status === 1 && res.data) {
        const user: UserView = res.data;
        console.log(user);
        this.dialog.open(PopUpComponent, {width: '550px', data: {message: res.message, title: 'Success'}});
        this.loginService.setUserData(user);
        this.loginService.loginLogoutSubject.next(true);
        this.router.navigate(['admin-dashboard']);
      } else {
        console.log(res.message);
        this.dialog.open(PopUpComponent, {width: '550px', data: {message: res.message, title: 'Error'}});
      }
    });
  }

}
