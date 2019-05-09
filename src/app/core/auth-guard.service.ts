import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RestApiService } from './rest-api.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private restApi: RestApiService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //check logged
    
    let auth = JSON.parse(localStorage.getItem('auth'));
    if((!auth) || (!auth.token)){
      this.router.navigate(['/notAllowed']);
      return false;
    }
    return true;
  }

}