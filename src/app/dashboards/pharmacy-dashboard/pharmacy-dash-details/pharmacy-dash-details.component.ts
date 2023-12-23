import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pharmacy-dash-details',
  templateUrl: './pharmacy-dash-details.component.html',
  styleUrls: ['./pharmacy-dash-details.component.css']
})
export class PharmacyDashDetailsComponent implements OnInit {

  public createListingGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.createListingGroup = this._formBuilder.group({
      'userName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'passWord': ['', Validators.required],
    })

   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.createListingGroup.value);
  }

}
