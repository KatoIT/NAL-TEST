import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<any> {
    return this.http.get(API_URL + '/products');
  }

  saveProduct(user: User): Observable<any> {
    return this.http.post<any>(API_URL + '/products', user);
  }

  findById(id: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/products/${id}`);
  }

  updateProduct(id: string, user: User): Observable<any> {
    return this.http.patch<any>(`${API_URL}/products/${id}`, user);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/products/${id}`);
  }
}
