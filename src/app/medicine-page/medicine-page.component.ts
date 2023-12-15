import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-page',
  templateUrl: './medicine-page.component.html',
  styleUrls: ['./medicine-page.component.css']
})
export class MedicinePageComponent implements OnInit {

  public searchTypes: string[] = ['Medicine', 'Pharmacy'];

  constructor() { }

  ngOnInit(): void {
  }

}
