import { Component, OnInit } from '@angular/core';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-medicine-page',
  templateUrl: './medicine-page.component.html',
  styleUrls: ['./medicine-page.component.css']
})
export class MedicinePageComponent implements OnInit {

  public listings:any = [];
  public searchTypes: string[] = ['Medicine', 'Pharmacy'];
  rows: number[][] = [];
  public totalCount: number = 1;

  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

  constructor() {

    this.listings = [{'medicineId':111,'medicineName':'Medicine1','price':100.00,'quantity':10,'status':'Active'},
    {'medicineId':112,'medicineName':'Medicine2','price':200,'quantity':20,'status':'Active'},
    {'medicineId':113,'medicineName':'Medicine3','price':300,'quantity':30,'status':'Active'},
    {'medicineId':114,'medicineName':'Medicine4','price':400,'quantity':40,'status':'Active'},
    {'medicineId':115,'medicineName':'Medicine5','price':150,'quantity':50,'status':'Out Of Stock'},
    {'medicineId':116,'medicineName':'Medicine6','price':160,'quantity':60,'status':'Out Of Stock'},
    {'medicineId':117,'medicineName':'Medicine7','price':190,'quantity':70,'status':'Active'}]

   }

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
