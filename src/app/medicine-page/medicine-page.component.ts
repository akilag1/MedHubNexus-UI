import { Component, OnInit } from '@angular/core';

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

  constructor() {

    this.listings = [{'medicineId':111,'medicineName':'asprin','price':100,'quantity':10,'status':'Active'},
    {'medicineId':112,'medicineName':'asprinx','price':200,'quantity':20,'status':'Active'},
    {'medicineId':113,'medicineName':'aspriny','price':300,'quantity':30,'status':'Active'},
    {'medicineId':114,'medicineName':'asprinz','price':400,'quantity':40,'status':'Active'},
    {'medicineId':115,'medicineName':'asprina','price':150,'quantity':50,'status':'Out Of Stock'},
    {'medicineId':116,'medicineName':'asprine','price':160,'quantity':60,'status':'Out Of Stock'},
    {'medicineId':117,'medicineName':'asprinr','price':190,'quantity':70,'status':'Active'}]

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
