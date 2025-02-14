import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DrugItem } from "../models/drugItem";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/response-dto";

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private http: HttpClient) {}

  createMedicine(formData: DrugItem): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ResponseDto>(
      `http://localhost:8080/medhubnexus/drugs/v1`,
      formData,
      { headers }
    );
  }

  getAllMedicines(): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<ResponseDto>(
      `http://localhost:8080/medhubnexus/drugs/v1/getall`,
      { headers }
    );
  }

  searchMedicines(searchString: string): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<ResponseDto>(
      `http://localhost:8080/medhubnexus/drugs/v1/${searchString}/getall`,
      { headers }
    );
  }

  deleteMedicine(id: number): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.delete<ResponseDto>(
      `http://localhost:8080/medhubnexus/drugs/v1/${id}`,
      { headers }
    );
  }
}