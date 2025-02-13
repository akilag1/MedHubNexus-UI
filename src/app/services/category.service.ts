import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/response-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  createCategory(formData: Category): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ResponseDto>(
      `http://localhost:8080/medhubnexus/categories/v1`,
      formData,
      { headers }
    );
  }

  getAllCategories(): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<ResponseDto>(
      `http://localhost:8080/medhubnexus/categories/v1/getall`,
      { headers }
    );
  }
}
