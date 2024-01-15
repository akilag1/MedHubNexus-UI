import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit, OnDestroy {

  public loginFormGroup: FormGroup;
  public registerFormGroup: FormGroup;
  public showProgressBar:boolean = false;//should be false
  public logOn:boolean = false;
  public regOn:boolean = false;//should be false
  public userTypeControl = new FormControl('customer');
  public loginData: Subscription | null = null;
  public registerData: Subscription | null = null;

  constructor(private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    public authService: AuthService,
    private router: Router,
    public dialogRefMain: MatDialogRef<UserLoginPageComponent>) {

    this.loginFormGroup = this._formBuilder.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.registerFormGroup = this._formBuilder.group({
      'login': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'userType': this.userTypeControl
    })

  }

  ngOnInit(): void {
  }

  onLoginSubmit() {

    this.showProgressBar = true;
    this.loginData = this.authService.getToken(this.loginFormGroup.value).subscribe({
      next: (data) => {
        this.showProgressBar = false;
        this.regOn = false;
        const successMessage = "User Login Successful";
        const dialogRef = this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: successMessage }
        }).afterClosed().subscribe(()=>{
          this.dialogRefMain.close();
          this.loginFormGroup.reset();
          this.router.navigate(['']);
        })
        console.log(data);
      },
      error: (err) => {
        this.showProgressBar = false;
        const errorMessage = err.error.message;
        const dialogRef = this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: errorMessage, title: 'Error' }
        }
        )
      }
    });

  }

  onRegisterSubmit() {

    this.showProgressBar = true;
    this.regOn = true;
    this.registerData = this.authService.registerUser(this.registerFormGroup.value).subscribe({
      next: (data) => {
        this.showProgressBar = false;
        this.regOn = false;
        const successMessage = "User Registration Successful";
        const dialogRef = this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: successMessage }
        }).afterClosed().subscribe(()=>{
          // this.dialogRefMain.close();
          this.registerFormGroup.reset();
          // this.router.navigate(['']);
        })
        console.log(data);
      },
      error: (err) => {
        this.showProgressBar = false;
        console.log(err);
        const errorMessage = err.error.message;
        const dialogRef = this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: errorMessage, title: 'Error' }
        }
        )
      }
    });

  }

  ngOnDestroy() {
    if (this.loginData != null) {
      this.loginData.unsubscribe();
    }
    if (this.registerData != null) {
      this.registerData.unsubscribe();
    }
  }

}
