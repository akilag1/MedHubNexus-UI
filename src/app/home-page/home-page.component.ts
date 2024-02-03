import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public listings:any = [];

  constructor() {

    this.listings = [{'medicineId':111,'medicineName':'Medicine1','price':100.00,'quantity':10,'status':'Active'},
    {'medicineId':112,'medicineName':'Medicine2','price':200,'quantity':20,'status':'Active'},
    {'medicineId':113,'medicineName':'Medicine3','price':300,'quantity':30,'status':'Active'},
    {'medicineId':114,'medicineName':'Medicine4','price':400,'quantity':40,'status':'Active'}]
   }

  ngOnInit(): void {
  }

}
