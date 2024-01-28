import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up/pop-up.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myForm: FormGroup;

  constructor(public dialog: MatDialog,
    private fb: FormBuilder
    ) {

    this.myForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
    });

   }

  ngOnInit(): void {
  }

  onSubscribe(){
    const successMessage = 'Successfully Registered for the Newsletter';
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '550px',
      data: { message: successMessage, title: 'Success' }
    })
  }

}
