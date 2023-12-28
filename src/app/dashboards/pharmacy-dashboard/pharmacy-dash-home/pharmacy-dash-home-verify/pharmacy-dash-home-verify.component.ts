import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pharmacy-dash-home-verify',
  templateUrl: './pharmacy-dash-home-verify.component.html',
  styleUrls: ['./pharmacy-dash-home-verify.component.css']
})
export class PharmacyDashHomeVerifyComponent implements OnInit {

  public createListingGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.createListingGroup = this._formBuilder.group({
      'drugName': '',
      'manuName': '',
      'manuDate': '',
      'expDate': '',
      'quantity': '',
      'price': '',
      thumbnails: this._formBuilder.array([])
    })

   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.createListingGroup.value);
  }

}
