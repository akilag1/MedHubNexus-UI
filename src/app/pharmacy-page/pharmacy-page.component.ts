import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.css']
})
export class PharmacyPageComponent implements OnInit {

  public searchTypes: string[] = ['Pharmacy'];

  constructor() { }

  ngOnInit(): void {
  }

}
