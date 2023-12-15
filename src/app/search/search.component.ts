import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input('searchTypes') searchTypes: string[] = [];
  selectedSearchType: string = "";
  searchText: string = '';

  @Output() searchEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.selectedSearchType = this.searchTypes[0];
  }

  search() {
    // Emit the search criteria to the parent component
    this.searchEvent.emit({ type: this.selectedSearchType, text: this.searchText });
  }

}
