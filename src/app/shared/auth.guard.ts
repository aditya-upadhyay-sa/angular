import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userservice: UserService
    ) {}
    canActivate(): boolean {
        if (this.userservice.loggedIn()) {
          console.log('true')
          return true
        } else {
          console.log('false')            
          this.router.navigate(['/login'])
          return false
        }
      }
}