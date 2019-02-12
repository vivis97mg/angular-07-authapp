import { Injectable } from '@angular/core';
import {  CanActivate, 
          Router, 
          ActivatedRouteSnapshot, 
          RouterStateSnapshot 
        } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth:AuthService, private router: Router ) {}

  canActivate(next: ActivatedRouteSnapshot, state : RouterStateSnapshot) {

    console.log(next); 
    if ( this.auth.isAuthenticated() ) {
      console.log('paso el guard');
      return true;
    } else {
      console.error('error el guard')
      return false;
    }

  }
 
}
