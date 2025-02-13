import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/pop-up/confirmation-dialog/confirmation-dialog.component';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-admin-dash-pharmacies',
  templateUrl: './admin-dash-pharmacies.component.html',
  styleUrls: ['./admin-dash-pharmacies.component.css'],
})
export class AdminDashPharmaciesComponent implements OnInit {
  public pharmacists: any = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;
  userlist!: any[];

  constructor(public dialog: MatDialog, private authService: AuthService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.getAllUsers().subscribe((data) => {
      this.userlist = data.data;
      this.pharmacists = this.userlist.filter((u) => u.userRole == 'PHARMACY');
    });
  }

  onPageChange(event: any) {
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    let fullPayLoad = {
      page: pageIndex,
      size: pageSize,
    };
  }

  onRemove(id: number) {
    const successMessage =
      'Are you sure you want to remove the Pharmacist permenently?';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { message: successMessage, title: 'Danger' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.pharmacists.splice(id, 1);
        const successMessage = 'Pharmacist has been deleted';
        const dialogRef = this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: successMessage, title: 'Success' },
        });
      } else {
        console.log('canceled');
      }
    });
  }
}
