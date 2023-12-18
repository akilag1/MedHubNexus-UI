import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.css']
})
export class PharmacyPageComponent implements OnInit {

  public searchTypes: string[] = ['Pharmacy'];
  rows: number[][] = [];

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

}
