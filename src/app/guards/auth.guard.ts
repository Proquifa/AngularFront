import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

//import { SessionUser } from './../services/session/session.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
   /*  if (SessionUser.getInstance().getAuthenticated()) {
      return true;
    }
    else {
      return false;
    } */
    return true;
  }
}