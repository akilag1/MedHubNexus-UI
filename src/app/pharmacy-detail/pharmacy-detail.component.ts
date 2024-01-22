import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-detail',
  templateUrl: './pharmacy-detail.component.html',
  styleUrls: ['./pharmacy-detail.component.css']
})
export class PharmacyDetailComponent implements OnInit {

  rows: number[][] = [];
  public totalCount: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.initializeGrid();
  }

  initializeGrid(): void {
    const totalItems = 7;
    const itemsPerRow = 4;
    // const rows = [];

    let remainingItems = totalItems;

    while (remainingItems > 0) {
      const itemsInCurrentRow = Math.min(itemsPerRow, remainingItems);
      const row = Array.from({ length: itemsInCurrentRow }, (_, index) => (this.rows.length * itemsPerRow) + index + 1);
      this.rows.push(row);
      remainingItems -= itemsInCurrentRow;
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
