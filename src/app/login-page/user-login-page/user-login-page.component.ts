import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  public loginGroup: FormGroup;
  public registerGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 

    this.loginGroup = this._formBuilder.group({
      'userName': '',
      'passWord': ''
    });

    this.registerGroup = this._formBuilder.group({
      'userName': '',
      'email': '',
      'password': '',
    })

  }

  ngOnInit(): void {
  }

}
