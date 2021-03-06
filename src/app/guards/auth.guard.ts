import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (state.url.includes('secret')) {
      console.error('Bạn không thể vào phòng bí mật này !');
      return false;
    }
    console.log(this.authService.isLoggedIn(), 'isLogin')
    if (this.authService.isLoggedIn()) {
      if (this.authService.canAccess(state.url)) {
        return true;
      }
      this.authService.notFoundPage();
      return false;
    } else {
      this.authService.login();
      return false;
    }
  }

}
