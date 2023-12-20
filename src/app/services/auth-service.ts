import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ServiceResponse } from '../models/ServiceResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  //localStorage or this vaiable can be used
  private isAuthenticated = false;

  // private apiUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) {}

  getToken(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`localhost:8080/medhubnexus/customer/test`);
  }
}
