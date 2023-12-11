import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-home',
  templateUrl: './admin-dash-home.component.html',
  styleUrls: ['./admin-dash-home.component.css']
})
export class AdminDashHomeComponent implements OnInit {

  public boxTitle1 = "REQUESTS"
  public boxTitle2 = "INBOX"
  public boxTitle3 = "PHARMACIES"
  public boxTitle4 = "CUSTOMERS"
  public boxTitle5 = "LISTINGS"

  constructor() { }

  ngOnInit(): void {
  }

}
