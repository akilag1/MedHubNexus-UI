import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-thumbnail',
  templateUrl: './medicine-thumbnail.component.html',
  styleUrls: ['./medicine-thumbnail.component.css']
})
export class MedicineThumbnailComponent implements OnInit {

  public medicineName:string = "Medicine";

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(){
    
  }

}
