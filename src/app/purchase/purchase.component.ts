import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor( 
    private dialogRef: MatDialogRef<PurchaseComponent>
    ) { }

  ngOnInit(): void {
  }

  onProceed(){
   this.dialogRef.close()
  }

  onCancel(){
    this.dialogRef.close();
  }

}
