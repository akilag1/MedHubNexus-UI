import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  //localStorage or this vaiable can be used
  private isAuthenticated = false;

  private apiUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
