import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginPageComponent } from 'src/app/login-page/user-login-page/user-login-page.component';
import { PurchaseComponent } from 'src/app/purchase/purchase.component';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-medicine-thumbnail',
  templateUrl: './medicine-thumbnail.component.html',
  styleUrls: ['./medicine-thumbnail.component.css']
})
export class MedicineThumbnailComponent implements OnInit {

  public medicineName:string = "asprin";

  @Input("data") data:any;

  constructor(public dialog: MatDialog,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
  }

  onBuy(){
    if(this.authService.isLoggedIn()){
      const dialogRef = this.dialog.open(PurchaseComponent, {
        width:'550px'
      });
    }else{
      const dialogRef = this.dialog.open(UserLoginPageComponent, {
        height: '520px',
        width: '650px',
        panelClass: 'log-reg-container'
      });
    }
  }

  onAddToCart(){
    if(this.authService.isLoggedIn()){

    }else{
      const dialogRef = this.dialog.open(UserLoginPageComponent, {
        height: '520px',
        width: '650px',
        panelClass: 'log-reg-container'
      });
    }
  }

}
