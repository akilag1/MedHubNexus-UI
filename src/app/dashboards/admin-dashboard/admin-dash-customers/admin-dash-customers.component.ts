import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-customers',
  templateUrl: './admin-dash-customers.component.html',
  styleUrls: ['./admin-dash-customers.component.css']
})
export class AdminDashCustomersComponent implements OnInit {

  public customers:string[]=[]

  constructor() { 

  }

  ngOnInit(): void {
  }

}
