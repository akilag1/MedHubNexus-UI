import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-dash-home',
  templateUrl: './admin-dash-home.component.html',
  styleUrls: ['./admin-dash-home.component.css'],
})
export class AdminDashHomeComponent implements OnInit {
  public boxTitle1 = 'PHARMACIES';
  public boxTitle2 = 'CUSTOMERS';
  public boxTitle3 = 'BRANDS';
  public boxTitle4 = 'CATEGORIES';
  public boxValue1!: number;
  public boxValue2!: number;
  public boxValue3!: number;
  public boxValue4!: number;
  userlist!: any[];
  customerlist!: any[];
  pharmacylist!: any[];
  categorylist!: any[];
  brandlist!: any[];

  constructor(
    private authService: AuthService,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getBrands();
    this.getCategories();
  }

  getUsers() {
    this.authService.getAllUsers().subscribe((data) => {
      this.userlist = data.data;
      this.customerlist = this.userlist.filter((u) => u.userRole == 'CUSTOMER');
      this.pharmacylist = this.userlist.filter((u) => u.userRole == 'PHARMACY');

      this.boxValue1 = this.pharmacylist.length;
      this.boxValue2 = this.customerlist.length;
    });
  }

  getBrands() {
    this.brandService.getAllBrands().subscribe((data) => {
      this.brandlist = data.data;

      this.boxValue3 = this.brandlist.length;
    });
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categorylist = data.data;

      this.boxValue4 = this.categorylist.length;
    });
  }
}
