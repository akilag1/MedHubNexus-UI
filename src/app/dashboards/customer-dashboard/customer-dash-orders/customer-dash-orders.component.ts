import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/pop-up/confirmation-dialog/confirmation-dialog.component';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';

@Component({
  selector: 'app-customer-dash-orders',
  templateUrl: './customer-dash-orders.component.html',
  styleUrls: ['./customer-dash-orders.component.css']
})
export class CustomerDashOrdersComponent implements OnInit {

  public orders:any = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;

  constructor(public dialog: MatDialog) {

    this.orders = [{'orderId':123,'medicineId':12,'medcineName':'asprin','quantity':10,'status':'To be shipped'},
    {'orderId':124,'medicineId':13,'medcineName':'asprine','quantity':8,'status':'To be shipped'},
    {'orderId':125,'medicineId':14,'medcineName':'asprinr','quantity':12,'status':'Shipped'}]

   }

  ngOnInit(): void {
  }

  onPageChange(event: any) {

    this.orders = [];
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    let fullPayLoad = {
      "page": pageIndex,
      "size": pageSize
    }
  }

  onCancel(id:number){
    const successMessage = 'Are you sure you want to cancel the order?';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { message: successMessage, title: "Danger" }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.orders.splice(id,1);
        const successMessage = 'Order has been canceled';
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
