import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  public adminLoginGroup: FormGroup;
  public showProgressBar:boolean = false;
  public loginData: Subscription | null = null;
  public logOn:boolean = false;

  constructor(private _formBuilder: FormBuilder,
    public authService: AuthService,
    public dialog: MatDialog,
    public router:Router
    ) {

    this.adminLoginGroup = this._formBuilder.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  onLoginSubmit() {

    this.showProgressBar = true;
    this.logOn = true
    this.loginData = this.authService.getToken(this.adminLoginGroup.value).subscribe({
      next: (data) => {
        this.showProgressBar = false;
        this.logOn = false;
        const successMessage = "Admin Login Successful";
        const dialogRef = this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: successMessage }
        }).afterClosed().subscribe(()=>{
          this.adminLoginGroup.reset();
          this.router.navigate(['admin-dashboard']);
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


}
