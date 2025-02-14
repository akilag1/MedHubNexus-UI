import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrugItem } from '../models/drugItem';
import { ResponseDto } from '../models/response-dto';
import { MedicineService } from '../services/medicine.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up/pop-up.component';
import { BrandService } from '../services/brand.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-medicine-page',
  templateUrl: './medicine-page.component.html',
  styleUrls: ['./medicine-page.component.css'],
})
export class MedicinePageComponent implements OnInit {
  medicines: any = [];
  brands: any = [];
  categories: any = [];
  public searchTypes: string[] = ['Medicine', 'Pharmacy'];
  rows: number[][] = [];
  public totalCount: number = 1;
  isCustomerUser = false;
  isPharmacyUser = false;
  addMedicineFormVisible = false;
  medicineFormGroup!: FormGroup;

  constructor(
    private loginService: LoginService,
    private _formBuilder: FormBuilder,
    private medicineService: MedicineService,
    private dialog: MatDialog,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) {
    this.medicineFormGroup = this._formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      brand: ['', Validators.required],
      description: [''],
      price: [''],
      totalQ: [''],
      availableQ: [''],
    });
  }

  ngOnInit(): void {
    this.getUserRole();
    this.initializeGrid();
    this.getAllMedicines();
    console.log(this.medicines);
  }

  getUserRole() {
    if (this.loginService.userRole == 'CUSTOMER') {
      this.isCustomerUser = true;
      this.isPharmacyUser = false;
    } else {
      this.isPharmacyUser = true;
      this.isCustomerUser = false;
    }
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data.data;
    });
  }

  getAllBrands() {
    this.brandService.getAllBrands().subscribe((data) => {
      this.brands = data.data;
    });
  }

  initializeGrid(): void {
    const totalItems = this.medicines.length;
    const itemsPerRow = 4;
    // const rows = [];

    let remainingItems = totalItems;

    while (remainingItems > 0) {
      const itemsInCurrentRow = Math.min(itemsPerRow, remainingItems);
      const row = Array.from(
        { length: itemsInCurrentRow },
        (_, index) => this.rows.length * itemsPerRow + index + 1
      );
      this.rows.push(row);
      remainingItems -= itemsInCurrentRow;
    }
  }

  onPageChange(event: any) {
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    let fullPayLoad = {
      page: pageIndex,
      size: pageSize,
    };
  }

  getAllMedicines() {
    this.medicineService.getAllMedicines().subscribe((data) => {
      this.medicines = data.data;
      this.medicines = this.medicines.filter(
        (s: { pharmacyInfo: { id: number } }) =>
          s.pharmacyInfo.id == this.loginService.userProfile.pharmacyInfo.id
      );
      console.log(this.medicines);
    });
  }

  openAddMedicine() {
    this.getAllBrands();
    this.getAllCategories();
    this.addMedicineFormVisible = true;
  }

  closeAddMedicine() {
    this.addMedicineFormVisible = false;
    this.medicineFormGroup.reset();
  }

  addMedicine() {
    const medicine = new DrugItem();
    medicine.code = this.medicineFormGroup.value.code;
    medicine.name = this.medicineFormGroup.value.name;
    medicine.description = this.medicineFormGroup.value.description
      ? this.medicineFormGroup.value.description
      : '';
    medicine.unitPrice = this.medicineFormGroup.value.price;
    medicine.availableQty = this.medicineFormGroup.value.availableQ;
    medicine.totalQty = this.medicineFormGroup.value.totalQ;
    medicine.brand = {
      id: parseInt(this.medicineFormGroup.get('brand')?.value),
    };
    medicine.category = {
      id: parseInt(this.medicineFormGroup.get('category')?.value),
    };
    medicine.pharmacyInfo = {
      id: this.loginService.userProfile.pharmacyInfo.id,
    };

    this.medicineService
      .createMedicine(medicine)
      .subscribe((res: ResponseDto) => {
        if (res.status === 1 && res.data) {
          const medicine: DrugItem = res.data;
          this.medicines.push(res.data);
          this.closeAddMedicine();
          this.dialog.open(PopUpComponent, {
            width: '550px',
            data: { message: res.message, title: 'Success' },
          });
        } else {
          console.log(res.message);
          this.closeAddMedicine();
          this.dialog.open(PopUpComponent, {
            width: '550px',
            data: { message: res.message, title: 'Error' },
          });
        }
      });
  }

  delete(id: number) {
    this.medicineService.deleteMedicine(id).subscribe((res) => {
      if (res.status === 1) {
        this.getAllMedicines();
        this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: res.message, title: 'Success' },
        });
      } else {
        this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: res.message, title: 'Error' },
        });
      }
    });
  }
}
