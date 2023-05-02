import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../services/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class GuarduserGuard implements CanActivateChild {
  constructor(private aus: AuthuserService, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      if (this.aus.userLoggedIn()) {
        // User is logged in
        if (state.url.includes('/loginuser')) {
          // User is already on the login page, redirect to home page
          this.router.navigate(['/']);
        } else {
          // Allow access to the requested page
          resolve(true);
        }
      } else {
        // User is not logged in
        if (state.url.includes('/loginuser')) {
          // User is already on the login page, do not redirect
          resolve(false);
        } else {
          // Save the return URL to local storage and redirect to the login page
          localStorage.setItem('returnUrl', state.url);
          this.router.navigate(['/loginuser']);
        }
      }
    });
  }
}
