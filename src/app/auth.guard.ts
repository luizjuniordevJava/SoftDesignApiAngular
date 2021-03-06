import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    const authenticaded = this.authService.isAuthenticaded();
    if ( authenticaded ) {
      return true;
    } else {
      localStorage.removeItem('access_token')
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
