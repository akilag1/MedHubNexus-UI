import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginPageComponent } from '../login-page/user-login-page/user-login-page.component';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

}
