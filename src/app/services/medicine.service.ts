import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface medicineData {
  name: string,
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class MedicineServiceService {

  constructor() { }

  private cartLoad = new Subject<medicineData>();

}