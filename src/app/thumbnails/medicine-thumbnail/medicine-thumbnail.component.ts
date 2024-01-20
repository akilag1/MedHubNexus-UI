import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseComponent } from 'src/app/purchase/purchase.component';

@Component({
  selector: 'app-medicine-thumbnail',
  templateUrl: './medicine-thumbnail.component.html',
  styleUrls: ['./medicine-thumbnail.component.css']
})
export class MedicineThumbnailComponent implements OnInit {

  public medicineName:string = "Medicine";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onBuy(){
    const dialogRef = this.dialog.open(PurchaseComponent, {
      width:'550px'
    });
  }

}
