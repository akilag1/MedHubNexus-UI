import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PharmacyDashListingsAddComponent } from './pharmacy-dash-listings-add/pharmacy-dash-listings-add.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { ResponseDto } from 'src/app/models/response-dto';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';
import { LoginService } from 'src/app/services/login.service';
import { UserView } from 'src/app/models/user-view';

@Component({
  selector: 'app-pharmacy-dash-listings',
  templateUrl: './pharmacy-dash-listings.component.html',
  styleUrls: ['./pharmacy-dash-listings.component.css'],
})
export class PharmacyDashListingsComponent implements OnInit {
  public categories: any = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;
  public approved: boolean = false;
  public categoryFormGroup!: FormGroup;
  addCategoryFormVisible = false;
  isAdmin = false;
  isCustomerUser = false;
  isPharmacyUser = false;

  constructor(
    private _formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private loginService: LoginService,
    private dialog: MatDialog
  ) {
    this.categoryFormGroup = this._formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.getUserRole();
  }

  onPageChange(event: any) {
    this.categories = [];
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    let fullPayLoad = {
      page: pageIndex,
      size: pageSize,
    };
  }

  addNewListing() {
    const dialogRef = this.dialog.open(PharmacyDashListingsAddComponent, {
      width: '850px',
    });
  }

  onRemove(index: number) {
    this.categories.splice(index, 1);
  }

  getUserRole(){
    if(this.loginService.userRole == 'CUSTOMER'){
      this.isCustomerUser = true;
    }
    else if(this.loginService.userRole == 'ADMIN'){
      this.isAdmin = true;
    }
    else{
      this.isPharmacyUser = true;
    }
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data.data;
    });
  }

  openAddCategory() {
    this.addCategoryFormVisible = true;
  }

  closeAddCategory() {
    this.addCategoryFormVisible = false;
    this.categoryFormGroup.reset();
  }

  addCategory() {
    const category = new Category();
    category.code = this.categoryFormGroup.value.code;
    category.name = this.categoryFormGroup.value.name;
    category.description = this.categoryFormGroup.value.description
      ? this.categoryFormGroup.value.description
      : '';

    this.categoryService
      .createCategory(category)
      .subscribe((res: ResponseDto) => {
        if (res.status === 1 && res.data) {
          const category: Category = res.data;
          this.categories.push(res.data);
          this.closeAddCategory();
          this.dialog.open(PopUpComponent, {
            width: '550px',
            data: { message: res.message, title: 'Success' },
          });
        } else {
          console.log(res.message);
          this.closeAddCategory();
          this.dialog.open(PopUpComponent, {
            width: '550px',
            data: { message: res.message, title: 'Error' },
          });
        }
      });
  }
}
