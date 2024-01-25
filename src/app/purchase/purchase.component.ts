import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor( 
    private dialogRef: MatDialogRef<PurchaseComponent>,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  onProceed(){
   this.dialogRef.close()
   this.router.navigate(['checkout'])
  }

  onCancel(){
    this.dialogRef.close();
  }

}
