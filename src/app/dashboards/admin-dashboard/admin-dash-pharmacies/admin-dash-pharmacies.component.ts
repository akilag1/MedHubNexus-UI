import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-pharmacies',
  templateUrl: './admin-dash-pharmacies.component.html',
  styleUrls: ['./admin-dash-pharmacies.component.css']
})
export class AdminDashPharmaciesComponent implements OnInit {

  public pharmacies:any = []
  public showProgressbar: boolean = false;
  public totalCount: number = 1;

  constructor() {

    this.pharmacies = [{'pharmacyId':1,'userName':'jane123','status':'Active'},
                        {'pharmacyId':2,'userName':'jane124','status':'Active'},
                        {'pharmacyId':3,'userName':'jane125','status':'Suspended'},
                        {'pharmacyId':4,'userName':'jane126','status':'Suspended'},
                        {'pharmacyId':5,'userName':'jane127','status':'Active'},
                        {'pharmacyId':6,'userName':'jane128','status':'Active'}]

   }

  ngOnInit(): void {
  }

  onPageChange(event: any) {

    // this.showProgressbar =true;
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    let fullPayLoad = {
      "page": pageIndex,
      "size": pageSize
    }
  }

}
