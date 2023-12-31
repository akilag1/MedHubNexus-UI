import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/pop-up/confirmation-dialog/confirmation-dialog.component';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';

@Component({
  selector: 'app-admin-dash-requests',
  templateUrl: './admin-dash-requests.component.html',
  styleUrls: ['./admin-dash-requests.component.css']
})
export class AdminDashRequestsComponent implements OnInit {

  public requests: any = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;

  constructor(public dialog: MatDialog) {

    this.requests = [{ 'requestId': 111, 'pharmacyId': 112, 'pharamacyUsername': 'Janes Pharmacy', 'status': 'Pending' },
    { 'requestId': 112, 'pharmacyId': 113, 'pharamacyUsername': 'Janes Pharmacy1', 'status': 'Pending' },
    { 'requestId': 113, 'pharmacyId': 114, 'pharamacyUsername': 'Janes Pharmacy2', 'status': 'Pending' },
    { 'requestId': 114, 'pharmacyId': 115, 'pharamacyUsername': 'Janes Pharmacy3', 'status': 'Pending' },
    { 'requestId': 115, 'pharmacyId': 116, 'pharamacyUsername': 'Janes Pharmacy4', 'status': 'Approved' },
    { 'requestId': 116, 'pharmacyId': 117, 'pharamacyUsername': 'Janes Pharmacy5', 'status': 'Approved' },
    { 'requestId': 117, 'pharmacyId': 118, 'pharamacyUsername': 'Janes Pharmacy6', 'status': 'Approved' }];

  }

  ngOnInit(): void {
  }

  onApprove(value:any) {
    this.requests[value]['status'] = 'Approved';
  }

  onPageChange(event: any) {

    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    let fullPayLoad = {
      "page": pageIndex,
      "size": pageSize
    }
  }

  onDeny(id:number){
    const successMessage = 'Are you sure you want to deny the request?';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { message: successMessage, title: "Danger" }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.requests[id]['status'] = 'Denied';
        const successMessage = 'Request has been denied';
          const dialogRef = this.dialog.open(PopUpComponent, {
            width: '550px',
            data: { message: successMessage, title: 'Success' }
          })
      }else{
        console.log("canceled");
      }
    })
  }

}
