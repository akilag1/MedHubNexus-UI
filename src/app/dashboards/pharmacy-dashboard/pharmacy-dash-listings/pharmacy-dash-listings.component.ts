import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-dash-listings',
  templateUrl: './pharmacy-dash-listings.component.html',
  styleUrls: ['./pharmacy-dash-listings.component.css']
})
export class PharmacyDashListingsComponent implements OnInit {

  public records: [] = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(event: any) {

    this.records = [];
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    let fullPayLoad = {
      "page": pageIndex,
      "size": pageSize
    }
  }

}
