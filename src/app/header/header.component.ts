import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginPageComponent } from '../login-page/user-login-page/user-login-page.component';
import { CommonService } from '../services/common-service';
import { PrescriptionComponent } from '../prescription/prescription.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAdmin:boolean = false;

  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    console.log("Header started")
  }

  onLogBtnPressed(){
    const dialogRef = this.dialog.open(UserLoginPageComponent, {
      height: '480px',
      width: '650px',
      panelClass: 'log-reg-container'
    });
  }

  onPrescriptionClick(){
    const dialogRef = this.dialog.open(PrescriptionComponent, {
      width:'550px'
    });
  }

}
