import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ResponseDto } from '../models/response-dto';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  createBrand(formData: Brand): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ResponseDto>(
      `http://localhost:8080/medhubnexus/brands/v1`,
      formData,
      { headers }
    );
  }

  getAllBrands(): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<ResponseDto>(
      `http://localhost:8080/medhubnexus/brands/v1/getall`,
      { headers }
    );
  }
}
