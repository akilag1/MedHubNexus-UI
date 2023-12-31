import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PharmacyDashDetailsComponent } from '../pharmacy-dash-details/pharmacy-dash-details.component';
import { PharmacyDashHomeVerifyComponent } from './pharmacy-dash-home-verify/pharmacy-dash-home-verify.component';

@Component({
  selector: 'app-pharmacy-dash-home',
  templateUrl: './pharmacy-dash-home.component.html',
  styleUrls: ['./pharmacy-dash-home.component.css']
})
export class PharmacyDashHomeComponent implements OnInit {

  public boxTitle1 = "ORDERS"
  public boxTitle2 = "INBOX"
  public boxTitle3 = "LISTINGS"
  public boxTitle4 = "OUT OF STOCK"
  public verified: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewListing() {
    const dialogRef = this.dialog.open(PharmacyDashDetailsComponent, {
      width: '850px'
    });
  }

  onVerify(){
    const dialogRef = this.dialog.open(PharmacyDashHomeVerifyComponent, {
      width:'850px'
    });
  }

}
