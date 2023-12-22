import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-dash-home',
  templateUrl: './pharmacy-dash-home.component.html',
  styleUrls: ['./pharmacy-dash-home.component.css']
})
export class PharmacyDashHomeComponent implements OnInit {

  public boxTitle1 = "ORDERS"
  public boxTitle2 = "INBOX"
  public boxTitle3 = "LISTINGS"
  public boxTitle4 = "OUT OF STOCK"
  public verified:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
