import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseDto} from "../models/response-dto";
import {UserView} from "../models/user-view";
import {Subject} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _userProfile!: UserView;
  private _token: string = '';
  private _userRole: string = '';

  private _refreshTimeout = null;
  loginLogoutSubject = new Subject();

  constructor(private http: HttpClient) { }

  get userProfile(): UserView {
    return this._userProfile;
  }

  set userProfile(value: UserView) {
    this._userProfile = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get userRole(): string {
    return this._userRole;
  }

  get refreshTimeout(): any {
    return this._refreshTimeout;
  }

  set refreshTimeout(value: any) {
    this._refreshTimeout = value;
  }

  setUserData(user: UserView, editMode = false) {
    this.userProfile = user;
    this._userRole = user.userRole;
    localStorage.setItem('medHubNexusUserProfile', JSON.stringify(user));
    if (!editMode) {
      this.token = user.accessToken;
      localStorage.setItem('medHubNexusToken', user.accessToken);
      localStorage.setItem('loginToken', user.loginToken);
      localStorage.setItem('userRole', user.userRole);
      localStorage.setItem('loginTimeMs', String(new Date().getTime()));
    }
  }

  signIn(email: string, password: string, userRole: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'email': email,
        'password': password,
        'userRole': userRole,
      }),
    };
    return this.http.post<ResponseDto>('http://localhost:8080/medhubnexus/auth/v1/signIn', null, httpOptions);
  }

  signUp(user: User) {
    let httpOptions = {
      headers: new HttpHeaders(),
    };
    return this.http.post<ResponseDto>('http://localhost:8080/medhubnexus/auth/v1/signup', user, httpOptions);
  }

  logOut() {
    this.removeToken();

    localStorage.removeItem('medHubNexusUserProfile');
    localStorage.removeItem('userRole');
    // @ts-ignore
    this.userProfile = null;
    localStorage.setItem('loginTimeMs', String(0));
    this.loginLogoutSubject.next(true);
  }

  removeToken() {
    this.token = '';
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
    }
    localStorage.removeItem('medHubNexusToken');
    localStorage.removeItem('loginToken');
    this.token = '';
  }

  loadUserFromLocalStorage() {
    const userProfile = localStorage.getItem('medHubNexusUserProfile');
    if (userProfile) {
      this.userProfile = JSON.parse(userProfile);
    } else {
      // @ts-ignore
      this.userProfile = null;
    }
    const jwtToken = localStorage.getItem('medHubNexusToken');
    if (jwtToken) {
      this.token = jwtToken;
    } else {
      this.token = '';
    }
    const userRole = localStorage.getItem('userRole');
    this._userRole = userRole ? userRole : '';
  }
}
