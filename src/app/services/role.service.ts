import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Role} from "../model/role";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class RoleService {
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
    return this.http.get(API_URL + '/roles', {headers: this.headers});
  }

  saveUser(role: Role): Observable<any> {
    console.log("post", role);
    return this.http.post<any>(API_URL + '/roles', role, {headers: this.headers});
  }

  findById(id: string): Observable<any> {
    console.log(id)
    return this.http.get<any>(`${API_URL}/roles/${id}`, {headers: this.headers});
  }

  updateProduct(id: string, role: Role): Observable<any> {
    return this.http.patch<any>(`${API_URL}/roles/${id}`, role, {headers: this.headers});
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/roles/${id}`, {headers: this.headers});
  }
}
