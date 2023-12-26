import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

export interface AuthResponseData {
  id: number,
  login: string;
  token: string;
  email: string;
  userType: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  //localStorage or this vaiable can be used
  private isAuthenticated = false;

  // private apiUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) { }

  getToken(formData:any):Observable<AuthResponseData> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.post<AuthResponseData>(`http://localhost:8080/medhubnexus/auth/login`, formData, {headers})

  }

  registerUser(formData:any):Observable<AuthResponseData>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    return this.http.post<AuthResponseData>(`http://localhost:8080/medhubnexus/auth/register`, formData, {headers})


  }


}
