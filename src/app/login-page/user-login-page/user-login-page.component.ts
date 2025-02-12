import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import {PopUpComponent} from 'src/app/pop-up/pop-up/pop-up.component';
import {AuthService} from 'src/app/services/auth-service';
import {ResponseDto} from "../../models/response-dto";
import {LoginService} from "../../services/login.service";
import {UserView} from "../../models/user-view";
import {Router} from "@angular/router";
import {CustomerInfo} from "../../models/customer-info";
import {PharmacyInfo} from "../../models/pharmacy-info";
import {User} from "../../models/user";
import * as moment from 'moment';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit, OnDestroy {

  public loginFormGroup: FormGroup;
  public registerFormGroup: FormGroup;
  public showProgressBar = false;
  public userTypeControl = new FormControl('CUSTOMER');
  public loginData: Subscription | null = null;
  public registerData: Subscription | null = null;

  constructor(private _formBuilder: FormBuilder,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<UserLoginPageComponent>,
              public authService: AuthService,
              public router: Router,
              private loginService: LoginService) {

    this.loginFormGroup = this._formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.registerFormGroup = this._formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'fullName': [''],
      'nic': [''],
      'gender': [''],
      'dob': [''],
      'addressLine1': [''],
      'addressLine2': [''],
      'city': [''],
      'district': [''],
      'postalCode': [''],
      'telephone': [''],

      'regNo': [''],
      'name': ['']
    })

  }

  ngOnInit(): void {
  }

  onLogin() {
    const email = this.loginFormGroup.value.email;
    const password = this.loginFormGroup.value.password;
    const userRole = this.userTypeControl.value ? this.userTypeControl.value : '';
    console.log(email, password, userRole);
    this.loginService.signIn(email, password, userRole).subscribe((res: ResponseDto) => {
      if (res.status === 1 && res.data) {
        const user: UserView = res.data;
        console.log(user);
        this.dialog.open(PopUpComponent, {width: '550px', data: {message: res.message, title: 'Success'}});

        this.loginService.setUserData(user);
        this.loginService.loginLogoutSubject.next(true);
        this.onClose();

        // Navigate to dashboard according to userRole
        switch (userRole) {
          case 'CUSTOMER':
            this.router.navigate(['customer-dashboard']);
            break;
          case 'PHARMACY':
            this.router.navigate(['pharmacy-dashboard']);

        }
      } else {
        console.log(res.message);
        this.dialog.open(PopUpComponent, {width: '550px', data: {message: res.message, title: 'Error'}});
      }
    });
  }

  onRegister() {
    const user = new User();
    user.email = this.registerFormGroup.value.email;
    user.password = this.registerFormGroup.value.password;

    const userRole = this.userTypeControl.value ? this.userTypeControl.value : '';
    user.userRole = userRole;

    if (userRole === 'CUSTOMER') {
      const customerInfo = new CustomerInfo();
      customerInfo.fullName = this.registerFormGroup.value.fullName;
      customerInfo.nic = this.registerFormGroup.value.nic;
      customerInfo.gender = this.registerFormGroup.value.gender;
      customerInfo.dob = this.registerFormGroup.value.dob ? moment(this.registerFormGroup.value.dob).format('YYYY-MM-DD') : '';
      customerInfo.addressLine1 = this.registerFormGroup.value.addressLine1;
      customerInfo.addressLine2 = this.registerFormGroup.value.addressLine2;
      customerInfo.city = this.registerFormGroup.value.city;
      customerInfo.district = this.registerFormGroup.value.district;
      customerInfo.postalCode = this.registerFormGroup.value.postalCode;
      customerInfo.telephone = this.registerFormGroup.value.telephone;
      user.customerInfo = customerInfo;
    } else if (userRole === 'PHARMACY') {
      const pharmacyInfo = new PharmacyInfo();
      pharmacyInfo.regNo = this.registerFormGroup.value.regNo;
      pharmacyInfo.name = this.registerFormGroup.value.name;
      pharmacyInfo.email = this.registerFormGroup.value.email;
      pharmacyInfo.addressLine1 = this.registerFormGroup.value.addressLine1;
      pharmacyInfo.addressLine2 = this.registerFormGroup.value.addressLine2;
      pharmacyInfo.city = this.registerFormGroup.value.city;
      pharmacyInfo.district = this.registerFormGroup.value.district;
      pharmacyInfo.contactNo = this.registerFormGroup.value.telephone;
      user.pharmacyInfo = pharmacyInfo;
    }
    console.log(user);
    this.loginService.signUp(user).subscribe((res: ResponseDto) => {
      if (res.status === 1) {
        this.registerFormGroup.reset();
        this.onClose();
        this.dialog.open(PopUpComponent, {width: '550px', data: {message: res.message, title: 'Success'}});
      } else {
        this.dialog.open(PopUpComponent, {width: '550px', data: {message: res.message, title: 'Error'}});
      }
    });
  }

  onLoginSubmit() {
    this.showProgressBar = true;
    this.loginData = this.authService.getToken(this.loginFormGroup.value).subscribe({
      next: (data) => {
        this.showProgressBar = false;
        console.log(data);
      },
      error: (err) => {
        this.showProgressBar = false;
        const errorMessage = err.error.message;
        const dialogRef = this.dialog.open(PopUpComponent, {
            width: '550px',
            data: {message: errorMessage, title: 'Error'}
          }
        )
      }
    });
  }

  onRegisterSubmit() {
    this.showProgressBar = true;
    this.registerData = this.authService.registerUser(this.registerFormGroup.value).subscribe({
      next: (data) => {
        this.showProgressBar = false;
        console.log(data);
      },
      error: (err) => {
        this.showProgressBar = false;
        const errorMessage = err.error.message;
        const dialogRef = this.dialog.open(PopUpComponent, {
            width: '550px',
            data: {message: errorMessage, title: 'Error'}
          }
        )
      }
    });

  }

  onClose() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.loginData != null) {
      this.loginData.unsubscribe();
    }
    if (this.registerData != null) {
      this.registerData.unsubscribe();
    }
  }

  isInvalidForm() {
    if (this.userTypeControl.value == 'CUSTOMER') {
      if (!this.registerFormGroup.value.fullName) {
        return true;
      }
      return false;
    } else {
      if (!this.registerFormGroup.value.regNo || !this.registerFormGroup.value.name) {
        return true;
      }
      return false;
    }
  }

  onChangeUserType() {
    this.registerFormGroup.reset();
  }
}
