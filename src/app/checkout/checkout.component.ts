import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopUpComponent } from '../pop-up/pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public shippingGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router:Router
    ) {

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

  onCashOndeliveryClick(){
    const successMessage = 'Order has been successfully placed';
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '550px',
      data: { message: successMessage, title: 'Success' }
    }).afterClosed().subscribe(()=>{
      this.router.navigate([''])
    })
  }

}
