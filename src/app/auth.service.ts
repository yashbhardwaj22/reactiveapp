import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthrouteService } from './authroute.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public auth:AuthrouteService, public route:Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.route.navigate(['register']);
      return false;
    }
    return true;
}
}
