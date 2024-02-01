import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/pop-up/confirmation-dialog/confirmation-dialog.component';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';

@Component({
  selector: 'app-admin-dash-pharmacies',
  templateUrl: './admin-dash-pharmacies.component.html',
  styleUrls: ['./admin-dash-pharmacies.component.css']
})
export class AdminDashPharmaciesComponent implements OnInit {

  public pharmacies:any = []
  public showProgressbar: boolean = false;
  public totalCount: number = 1;

  constructor(public dialog: MatDialog) {

    this.pharmacies = [{'pharmacyId':1,'userName':'jane123','email':'test@gmail.com','status':'Active'},
                        {'pharmacyId':2,'userName':'jane124','email':'test@gmail.com','status':'Active'},
                        {'pharmacyId':3,'userName':'jane125','email':'test@gmail.com','status':'Suspended'},
                        {'pharmacyId':4,'userName':'jane126','email':'test@gmail.com','status':'Suspended'},
                        {'pharmacyId':5,'userName':'jane127','email':'test@gmail.com','status':'Active'},
                        {'pharmacyId':6,'userName':'jane128','email':'test@gmail.com','status':'Active'}]

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

  onRemove(id:number){
    const successMessage = 'Are you sure you want to remove the Pharmacist permenently?';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { message: successMessage, title: "Danger" }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.pharmacies.splice(id,1);
        const successMessage = 'Pharmacist has been deleted';
          const dialogRef = this.dialog.open(PopUpComponent, {
            width: '550px',
            data: { message: successMessage, title: 'Success' }
          })
      }else{
        console.log("canceled");
      }
    })
  }

  onSuspend(id:number){
    this.pharmacies[id]['status'] = "Suspended";
  }

  onActive(id:number){
    this.pharmacies[id]['status'] = "Active";
  }

}
