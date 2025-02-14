import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-thumbnail',
  templateUrl: './medicine-thumbnail.component.html',
  styleUrls: ['./medicine-thumbnail.component.css']
})
export class MedicineThumbnailComponent implements OnInit {

  @Input('medicineName') medicineName!:string;
    @Input('medicinePrice') medicinePrice!:number;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(){
    
  }

}
