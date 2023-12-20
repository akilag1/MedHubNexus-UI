import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-page',
  templateUrl: './medicine-page.component.html',
  styleUrls: ['./medicine-page.component.css']
})
export class MedicinePageComponent implements OnInit {

  public searchTypes: string[] = ['Medicine', 'Pharmacy'];
  rows: number[][] = [];
  public totalCount: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.initializeGrid();
  }

  initializeGrid(): void {
    const totalItems = 7;
    const itemsPerRow = 4;

    for (let i = 0; i < totalItems; i += itemsPerRow) {
      const row = Array.from({ length: itemsPerRow }, (_, index) => i + index + 1);
      this.rows.push(row);
    }
  }

  onPageChange(event: any) {

    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    let fullPayLoad = {
      "page": pageIndex,
      "size": pageSize
    }
  }

}
