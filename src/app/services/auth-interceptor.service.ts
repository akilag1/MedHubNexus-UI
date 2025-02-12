import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('medHubNexusToken');
    const loginToken = localStorage.getItem('loginToken');
    if (accessToken) {
      req = req.clone({
        setHeaders: {
          'authorization': 'Bearer ' + accessToken,
          'authKey': loginToken ? loginToken : ''
        }
      });
    }
    return next.handle(req);
  }
}

export let AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
};
