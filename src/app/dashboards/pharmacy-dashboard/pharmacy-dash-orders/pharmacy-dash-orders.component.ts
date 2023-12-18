import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-dash-orders',
  templateUrl: './pharmacy-dash-orders.component.html',
  styleUrls: ['./pharmacy-dash-orders.component.css']
})
export class PharmacyDashOrdersComponent implements OnInit {

  public orders:any = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;

  constructor() {

    this.orders = [{'orderId':123,'medicineId':12,'medcineName':'asprin','quantity':10,'status':'To be shipped'},
    {'orderId':124,'medicineId':13,'medcineName':'asprine','quantity':8,'status':'To be shipped'},
    {'orderId':125,'medicineId':14,'medcineName':'asprinr','quantity':12,'status':'Shipped'}]

   }

  ngOnInit(): void {
  }

  onPageChange(event: any) {

    this.orders = [];
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    let fullPayLoad = {
      "page": pageIndex,
      "size": pageSize
    }
  }

  onShippedClicked(){

  }

  onCancelClicked(){

  }

}
