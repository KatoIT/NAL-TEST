import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {JwtHelperService} from '@auth0/angular-jwt';
import {ROUTES} from "../components/sidebar/sidebar-routes.config";
import {ROLE_PATH} from "../pages/home/role-path.config";
import {RolePathMetadata} from "../pages/home/role-path.metadata";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public roles: string = '';
  rolePaths: RolePathMetadata[] = [];

  constructor(private router: Router,
  ) {
    this.rolePaths = ROLE_PATH;
  }

  public setToken(token: string) {
    if (!token) {
      this.removeToken();
      return;
    }
    localStorage.setItem('token', token);

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    // console.log('decodedToken', decodedToken);
    this.roles = decodedToken.roles.map((role: string) => role.toLowerCase());
    console.log('roles', this.roles);

    // const expirationDate = helper.getTokenExpirationDate(token);
    // const isExpired = helper.isTokenExpired(token);

    // console.log('expirationDate', expirationDate);
    // console.log('isExpired', isExpired);
  }

  public removeToken() {
    localStorage.removeItem('token');
    this.roles = '';
  }

  public getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.removeToken();
      return;
    }
    if (this.roles.length === 0) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      // console.log('decodedToken', decodedToken);
      this.roles = decodedToken.roles.map((role: string) => role.toLowerCase());
      console.log('roles', this.roles);
    }

    return token;
  }

  public isLoggedIn(): boolean {
    // return this.getToken() !== null;
    this.roles = environment.role_admin;
    return true;
  }

  public canAccess(url: string) {
    console.log('canAccess', this.roles, url);
    if (this.roles === environment.role_admin) {
      return true;
    } else {
      if (this.roles === environment.role_user) {
        let rolePath = this.rolePaths.find(value => value.role === environment.role_user);
        console.log(rolePath)
        if (rolePath !== undefined && rolePath.paths.includes(url)) {
          return true;
        }
      } else {
        return true;
      }

    }
    const page = url.toString().substr(1);
    // console.log('canAccess', page);
    if (this.roles.includes(page)) {
      return true;
    }
    console.error('Bạn không thể vào trang ' + page);
    return false;
  }

  public logout() {
    this.removeToken();
    this.router.navigate(['/']).then(value => ['error']);
  }

  public login(): void {
    this.router.navigate(['login']).then(value => ['error']);
  }

  public notFoundPage(): void {
    this.router.navigate(['error']).then(value => ['error']);
  }

}
