import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-admin-dash-home',
  templateUrl: './admin-dash-home.component.html',
  styleUrls: ['./admin-dash-home.component.css']
})
export class AdminDashHomeComponent implements OnInit {

  public boxTitle1 = "PHARMACIES"
  public boxTitle2 = "CUSTOMERS"
  public boxValue1!: number;
  public boxValue2!: number;
  userlist!: any[];
  customerlist!: any[];
  pharmacylist!: any[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.authService.getAllUsers().subscribe((data) => {
      this.userlist = data.data;
      this.customerlist = this.userlist.filter(u => u.userRole == 'CUSTOMER');
      this.pharmacylist = this.userlist.filter(u => u.userRole == 'PHARMACY')

      this.boxValue1 = this.pharmacylist.length;
      this.boxValue2 = this.customerlist.length;
    })
  }

}
