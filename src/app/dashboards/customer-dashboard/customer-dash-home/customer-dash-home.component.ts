import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dash-home',
  templateUrl: './customer-dash-home.component.html',
  styleUrls: ['./customer-dash-home.component.css']
})
export class CustomerDashHomeComponent implements OnInit {

  public boxTitle1 = "ORDERS"
  public boxTitle2 = "INBOX"

  constructor() { }

  ngOnInit(): void {
  }

}
