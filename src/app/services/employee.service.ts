import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAll(): Observable<any> {
    return this.http.get(API_URL + '/employees');
  }

  saveProduct(employee: Employee): Observable<any> {
    return this.http.post<any>(API_URL + '/employees', employee);
  }

  findById(id: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/employees/${id}`);
  }

  updateProduct(id: string, employee: Employee): Observable<any> {
    return this.http.patch<any>(`${API_URL}/employees/${id}`, employee);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/employees/${id}`);
  }
}
