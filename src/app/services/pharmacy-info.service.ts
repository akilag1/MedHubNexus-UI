import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseDto } from "../models/response-dto";

@Injectable({
  providedIn: 'root',
})
export class PharmacyInfoService {
  constructor(private http: HttpClient) {}

  searchPharmacies(searchString: string): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<ResponseDto>(
      `http://localhost:8080/medhubnexus/pharmacyInfo/v1/${searchString}/getall`,
      { headers }
    );
  }
}