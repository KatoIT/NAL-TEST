import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {AuthService} from "./auth.service";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json;'
  });

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json;',
      'Authorization': 'Bearer ' + authService.getToken()
    });
  }

  getAll(): Observable<any> {
    return this.http.get(API_URL + '/users', {headers: this.headers});
  }

  saveUser(user: User): Observable<any> {
    console.log("post", user);
    return this.http.post<any>(API_URL + '/users', user, {headers: this.headers});
  }

  findById(id: string): Observable<any> {
    console.log(id)
    return this.http.get<any>(`${API_URL}/users/${id}`, {headers: this.headers});
  }

  updateUser(id: string, user: User): Observable<any> {
    return this.http.patch<any>(`${API_URL}/users/${id}`, user, {headers: this.headers});
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/users/${id}`, {headers: this.headers});
  }
}
