import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-customers',
  templateUrl: './admin-dash-customers.component.html',
  styleUrls: ['./admin-dash-customers.component.css']
})
export class AdminDashCustomersComponent implements OnInit {

  public customers:any=[]
  public showProgressbar: boolean = false;
  public totalCount: number = 1;

  constructor() { 

    this.customers = [{'userId':123,'userName':'amila','email':'amila@gmail.com','status':'Active'},
    {'userId':124,'userName':'asitha','email':'asitha@gmail.com','status':'Active'},
    {'userId':125,'userName':'kamal','email':'kamal@gmail.com','status':'Active'},
    {'userId':126,'userName':'ajith','email':'ajith@gmail.com','status':'Suspended'},
    {'userId':127,'userName':'kapila','email':'kapila@gmail.com','status':'Suspended'},
    {'userId':128,'userName':'ksaun','email':'ksaun@gmail.com','status':'Active'},
    {'userId':129,'userName':'dasun','email':'dasun@gmail.com','status':'Active'}]

  }

  ngOnInit(): void {
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
