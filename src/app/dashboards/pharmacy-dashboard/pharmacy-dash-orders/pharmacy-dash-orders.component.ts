import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-dash-orders',
  templateUrl: './pharmacy-dash-orders.component.html',
  styleUrls: ['./pharmacy-dash-orders.component.css']
})
export class PharmacyDashOrdersComponent implements OnInit {

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
