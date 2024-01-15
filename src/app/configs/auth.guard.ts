import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up/pop-up.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
     private router: Router,
     public dialog: MatDialog
     ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      console.log("Please Log In");
      const message = "Please Log In";
      const dialogRef = this.dialog.open(PopUpComponent, {
        width: '550px',
        data: { message: message, title: 'Warning' }
      })
      return false;
    }
  }
}
