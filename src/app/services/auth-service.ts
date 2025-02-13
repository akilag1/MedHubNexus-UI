import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/response-dto';

export interface AuthResponseData {
  id: number;
  login: string;
  token: string;
  email: string;
  userType: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  // private apiUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) {}

  get token(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  getToken(formData: any): Observable<AuthResponseData> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<AuthResponseData>(
      `http://localhost:8080/medhubnexus/auth/login`,
      formData,
      { headers }
    );
  }

  registerUser(formData: any): Observable<AuthResponseData> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<AuthResponseData>(
      `http://localhost:8080/medhubnexus/auth/register`,
      formData,
      { headers }
    );
  }

  getAllUsers(): Observable<ResponseDto> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<ResponseDto>(
      `http://localhost:8080/medhubnexus/auth/v1/getall`,
      { headers }
    );
  }
}
