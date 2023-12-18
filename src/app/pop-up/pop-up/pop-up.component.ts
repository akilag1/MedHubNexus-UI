import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  title : string='';
  message: string='';

  @Input() popupMessage: any;
  @Output() close = new EventEmitter<void>();
  @Output() logOutEmit = new EventEmitter();
  @Output() deleteEmit = new EventEmitter();
  @Output() applicationDeleteEmit = new EventEmitter();
  @Output() jobonDeleteEmit = new EventEmitter();
  @Output() useronDeleteEmit = new EventEmitter();

  public deleteGalaryId: any;

  constructor(public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, title: string },) {

    this.message = data.message;
    this.title = data.title;

  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Add' });
  }

  public getDeleteId(id: any): void {
    this.deleteGalaryId = id;
  }

  onCloseClick() {
    this.close.emit();
    this.popupMessage = '';
  }

}
