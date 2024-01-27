import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public shippingGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.shippingGroup = this._formBuilder.group({
      'fname': '',
      'lname': '',
      'email': '',
      'addr1': '',
      'addr2': '',
      'city': '',
      'pcode': '',
      'pnumber': '',
      'notes': ''
    })

   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.shippingGroup.value);
  }

}
