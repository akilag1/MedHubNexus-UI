import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  public loginFormGroup: FormGroup;
  public registerFormGroup: FormGroup;
  public showProgressBar = true;
  public userTypeControl = new FormControl('customer');

  constructor(private _formBuilder: FormBuilder) { 

    this.loginFormGroup = this._formBuilder.group({
      'userName': ['', Validators.required],
      'passWord': ['', Validators.required]
    });

    this.registerFormGroup = this._formBuilder.group({
      'userName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'passWord': ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  onLoginSubmit(){
    console.log(this.loginFormGroup.value);
    console.log(this.userTypeControl.value);
  }

}
