import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
