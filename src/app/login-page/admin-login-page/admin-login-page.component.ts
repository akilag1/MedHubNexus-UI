import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {

  public adminLoginGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.adminLoginGroup = this._formBuilder.group({
      'userName': '',
      'password': ''
    });

   }

  ngOnInit(): void {
  }

}
