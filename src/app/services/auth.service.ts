import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ROLE_PATH} from "../pages/home/role-path.config";
import {RolePathMetadata} from "../pages/home/role-path.metadata";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rolePaths: RolePathMetadata[] = [];

  constructor(private router: Router,
  ) {
    this.rolePaths = ROLE_PATH;
  }

  public getUserId() {
    const userName = localStorage.getItem('id');
    if (!userName) {
      this.removeToken();
      return;
    }
    return userName;
  }

  public getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.removeToken();
      return;
    }
    return token;
  }

  public getRoles() {
    const roles = localStorage.getItem('roles');
    if (!roles) {
      this.removeToken();
      return;
    }
    return roles;
  }

  public setToken(token: any) {
    if (!token) {
      this.removeToken();
      return;
    }
    localStorage.setItem('token', token.accessToken);
    localStorage.setItem('roles', token.roles[0].authority);
    localStorage.setItem('id', token.id);
    window.location.href = 'http://localhost:4200'
  }

  public removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('id');
  }

  public isLoggedIn(): boolean {
    console.log(this.getToken(), 'getToken')
    return this.getToken() !== null && this.getToken() !== undefined;
  }

  public canAccess(url: string) {
    console.log('canAccess', this.getRoles(), url);
    let roles = this.getRoles();
    if (roles === environment.role_admin) {
      return true;
    } else {
      if (roles === environment.role_user) {
        let rolePath = this.rolePaths.find(value => value.role === environment.role_user);
        if (rolePath !== undefined && rolePath.paths.includes(url)) {
          return true;
        }
      } else {
        return false;
      }
    }
    return false;
  }

  public logout() {
    this.removeToken();
    this.login();
  }

  public login(): void {
    this.router.navigate(['login']).then(value => ['error']);
  }

  public notFoundPage(): void {
    this.router.navigate(['error']).then(value => ['error']);
  }

}
