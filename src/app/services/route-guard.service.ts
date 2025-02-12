import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {LoginService} from "./login.service";
import {map, Observable, startWith} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const result = !!localStorage.getItem('medHubNexusToken');
    const loginTime = localStorage.getItem('loginTimeMs');
    const isLoginValid = !!loginTime && (+loginTime + 86400000 > new Date().getTime());
    if (!isLoginValid) {
      this.loginService.logOut();
      this.router.navigateByUrl('');
      return false;
    }
    if (result) {
      return true;
    } else {
      return this.router.createUrlTree(['']);
    }
  }
}
