import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/pop-up/confirmation-dialog/confirmation-dialog.component';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-admin-dash-customers',
  templateUrl: './admin-dash-customers.component.html',
  styleUrls: ['./admin-dash-customers.component.css'],
})
export class AdminDashCustomersComponent implements OnInit {
  public customers: any = [];
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
      this.customers = this.userlist.filter((u) => u.userRole == 'CUSTOMER');
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

  onActive(id: number) {
    this.customers[id]['status'] = 'Active';
  }

  onSuspend(id: number) {
    this.customers[id]['status'] = 'Suspended';
  }

  onRemove(id: number) {
    const successMessage =
      'Are you sure you want to remove the Customer permenently?';
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: { message: successMessage, title: 'Danger' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.customers.splice(id, 1);
        const successMessage = 'Customer has been deleted';
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
