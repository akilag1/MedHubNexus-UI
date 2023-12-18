import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  priceRange: number = 500; 
  selectedBrand: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  locations = [
    { name: 'Location 1', checked: false },
    { name: 'Location 2', checked: false },
    { name: 'Location 3', checked: false },
  ];
  brands = ['Brand 1', 'Brand 2', 'Brand 3'];

  applyFilters() {
    console.log('Price Range:', this.priceRange);
    console.log('Selected Locations:', this.locations.filter(location => location.checked).map(location => location.name));
    console.log('Selected Brands:', this.selectedBrand);
  }

}
