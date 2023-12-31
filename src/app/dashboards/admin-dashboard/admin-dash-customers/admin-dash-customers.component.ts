import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/pop-up/confirmation-dialog/confirmation-dialog.component';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';

@Component({
  selector: 'app-admin-dash-customers',
  templateUrl: './admin-dash-customers.component.html',
  styleUrls: ['./admin-dash-customers.component.css']
})
export class AdminDashCustomersComponent implements OnInit {

  public customers:any=[]
  public showProgressbar: boolean = false;
  public totalCount: number = 1;

  constructor(public dialog: MatDialog) { 

    this.customers = [{'userId':123,'userName':'amila','email':'amila@gmail.com','status':'Active'},
    {'userId':124,'userName':'asitha','email':'asitha@gmail.com','status':'Active'},
    {'userId':125,'userName':'kamal','email':'kamal@gmail.com','status':'Active'},
    {'userId':126,'userName':'ajith','email':'ajith@gmail.com','status':'Suspended'},
    {'userId':127,'userName':'kapila','email':'kapila@gmail.com','status':'Suspended'},
    {'userId':128,'userName':'ksaun','email':'ksaun@gmail.com','status':'Active'},
    {'userId':129,'userName':'dasun','email':'dasun@gmail.com','status':'Active'}]

  }

  ngOnInit(): void {
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

  onActive(id:number){
    this.customers[id]['status'] = "Active";
  }

  onSuspend(id:number){
    this.customers[id]['status'] = "Suspended";
  }

  onRemove(id:number){
    const successMessage = 'Are you sure you want to remove the Customer permenently?';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { message: successMessage, title: "Danger" }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.customers.splice(id,1);
        const successMessage = 'Customer has been deleted';
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
