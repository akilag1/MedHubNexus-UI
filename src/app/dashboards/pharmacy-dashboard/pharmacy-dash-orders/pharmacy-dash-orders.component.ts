import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Brand } from 'src/app/models/brand';
import { ResponseDto } from 'src/app/models/response-dto';
import { PopUpComponent } from 'src/app/pop-up/pop-up/pop-up.component';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-pharmacy-dash-orders',
  templateUrl: './pharmacy-dash-orders.component.html',
  styleUrls: ['./pharmacy-dash-orders.component.css'],
})
export class PharmacyDashOrdersComponent implements OnInit {
  public brands: any = [];
  public showProgressbar: boolean = false;
  public totalCount: number = 1;
  public brandFormGroup!: FormGroup;
  addBrandFormVisible = false;

  constructor(
    private _formBuilder: FormBuilder,
    private brandService: BrandService,
    private dialog: MatDialog
  ) {
    this.brandFormGroup = this._formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.getAllBrands();
  }

  onPageChange(event: any) {
    this.brands = [];
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    let fullPayLoad = {
      page: pageIndex,
      size: pageSize,
    };
  }

  onShippedClicked() {}

  onCancelClicked() {}

  getAllBrands() {
    this.brandService.getAllBrands().subscribe((data) => {
      this.brands = data.data;
    });
  }

  openAddBrand() {
    this.addBrandFormVisible = true;
  }

  closeAddBrand() {
    this.addBrandFormVisible = false;
    this.brandFormGroup.reset();
  }

  addBrand() {
    const brand = new Brand();
    brand.code = this.brandFormGroup.value.code;
    brand.name = this.brandFormGroup.value.name;
    brand.description = this.brandFormGroup.value.description
      ? this.brandFormGroup.value.description
      : '';

    this.brandService.createBrand(brand).subscribe((res: ResponseDto) => {
      if (res.status === 1 && res.data) {
        const brand: Brand = res.data;
        this.brands.push(res.data);
        this.closeAddBrand();
        this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: res.message, title: 'Success' },
        });
      } else {
        console.log(res.message);
        this.closeAddBrand();
        this.dialog.open(PopUpComponent, {
          width: '550px',
          data: { message: res.message, title: 'Error' },
        });
      }
    });
  }
}
