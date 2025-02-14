import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { PharmacyInfoService } from 'src/app/services/pharmacy-info.service';

@Component({
  selector: 'app-customer-dash-home',
  templateUrl: './customer-dash-home.component.html',
  styleUrls: ['./customer-dash-home.component.css'],
})
export class CustomerDashHomeComponent implements OnInit {
  public searchTypes: string[] = ['Medicine', 'Pharmacy'];
  selectedSearchType!: string;
  searchText!: string;
  medicines: any = [];
  pharmacies: any = [];
  isMedicine = false;
  isPharmacy = false;
  public totalCount: number = 1;
  constructor(
    private medicineService: MedicineService,
    private pharmacyInfoService: PharmacyInfoService
  ) {}

  ngOnInit(): void {}

  onPageChange(event: any) {
    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    let fullPayLoad = {
      page: pageIndex,
      size: pageSize,
    };
  }

  search() {
    if (this.selectedSearchType == 'Medicine') {
      this.medicineService
        .searchMedicines(this.searchText)
        .subscribe((data) => {
          this.isMedicine = true;
          this.isPharmacy = false;
          this.medicines = data.data;
          this.totalCount = this.medicines.length
        });
    } else if (this.selectedSearchType == 'Pharmacy') {
      this.pharmacyInfoService
        .searchPharmacies(this.searchText)
        .subscribe((data) => {
          this.isPharmacy = true;
          this.isMedicine = false;
          this.pharmacies = data.data;
          this.totalCount = this.pharmacies.length
        });
    }
  }
}
