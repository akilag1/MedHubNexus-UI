import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.css']
})
export class PharmacyPageComponent implements OnInit {

  public pharmacies: any = [];
  public searchTypes: string[] = ['Pharmacy'];
  rows:number[][] = [];
  public totalCount: number = 1;

  constructor() {

    this.pharmacies = [{ 'id': 1, 'name': 'pharmacy1', 'location': 'Colombo', 'license': '12345', 'email': 'ph1@gmail.com', 'phone': '0771234567' },
    { 'id': 2, 'name': 'pharmacy2', 'location': 'Colombo', 'license': '12341', 'email': 'ph2@gmail.com', 'phone': '0771234561' },
    { 'id': 3, 'name': 'pharmacy3', 'location': 'Kandy', 'license': '12342', 'email': 'ph3@gmail.com', 'phone': '0771234562' },
    { 'id': 4, 'name': 'pharmacy4', 'location': 'Kandy', 'license': '12343', 'email': 'ph4@gmail.com', 'phone': '0771234563' },
    { 'id': 5, 'name': 'pharmacy5', 'location': 'Galle', 'license': '12344', 'email': 'ph5@gmail.com', 'phone': '0771234564' },
    { 'id': 6, 'name': 'pharmacy6', 'location': 'Galle', 'license': '12347', 'email': 'ph6@gmail.com', 'phone': '0771234565' },
    { 'id': 7, 'name': 'pharmacy7', 'location': 'Galle', 'license': '12348', 'email': 'ph7@gmail.com', 'phone': '0771234566' },]

  }

  ngOnInit(): void {
    this.initializeGrid();
  }

  initializeGrid(): void {
    // const totalItems = 7;
    // const itemsPerRow = 4;

    // for (let i = 0; i < totalItems; i += itemsPerRow) {
    //   const row = Array.from({ length: itemsPerRow }, (_, index) => i + index + 1);
    //   console.log(row);
    //   this.rows.push(row);
    // }

    const totalItems = 9;
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
