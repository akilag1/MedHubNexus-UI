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

  public listings: any = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;
  public approved:boolean = false;

  constructor(public dialog: MatDialog) { 

    this.listings = [{'medicineId':111,'medicineName':'asprin','price':100,'quantity':10,'status':'Active'},
    {'medicineId':112,'medicineName':'asprinx','price':200,'quantity':20,'status':'Active'},
    {'medicineId':113,'medicineName':'aspriny','price':300,'quantity':30,'status':'Active'},
    {'medicineId':114,'medicineName':'asprinz','price':400,'quantity':40,'status':'Active'},
    {'medicineId':115,'medicineName':'asprina','price':150,'quantity':50,'status':'Out Of Stock'},
    {'medicineId':116,'medicineName':'asprine','price':160,'quantity':60,'status':'Out Of Stock'},
    {'medicineId':117,'medicineName':'asprinr','price':190,'quantity':70,'status':'Active'}]

  }

  ngOnInit(): void {
  }

  onPageChange(event: any) {

    this.listings = [];
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    let fullPayLoad = {
      "page": pageIndex,
      "size": pageSize
    }
  }

  addNewListing(){
      const dialogRef = this.dialog.open(PharmacyDashListingsAddComponent, {
        width:'850px'
      });
  }

  onRemove(index:number){
    this.listings.splice(index,1);
  }

}
