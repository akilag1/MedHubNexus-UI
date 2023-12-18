import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PharmacyDashListingsAddComponent } from './pharmacy-dash-listings-add/pharmacy-dash-listings-add.component';
import { ConfirmationDialogComponent } from 'src/app/pop-up/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-pharmacy-dash-listings',
  templateUrl: './pharmacy-dash-listings.component.html',
  styleUrls: ['./pharmacy-dash-listings.component.css']
})
export class PharmacyDashListingsComponent implements OnInit {

  public records: [] = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;
  public approved:boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onPageChange(event: any) {

    this.records = [];
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    let fullPayLoad = {
      "page": pageIndex,
      "size": pageSize
    }
  }

  addNewListing(){
    if(this.approved){
      const dialogRef = this.dialog.open(PharmacyDashListingsAddComponent, {
        width:'550px'
      });
    }else{
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: { message: "Please provide a license before listing medicines" },
        width:'500px'
      });
    }
  }

}
