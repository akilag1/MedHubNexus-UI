import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTypes: string[] = ['Name', 'Category', 'Description'];
  selectedSearchType: string = this.searchTypes[0];
  searchText: string = '';

  @Output() searchEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    // Emit the search criteria to the parent component
    this.searchEvent.emit({ type: this.selectedSearchType, text: this.searchText });
  }

}
