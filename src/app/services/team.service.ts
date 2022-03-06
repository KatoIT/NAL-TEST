import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Team} from "../model/team";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TeamService {

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
    return this.http.get(API_URL + '/teams', {headers: this.headers});
  }

  saveTeam(team: Team): Observable<any> {
    console.log("post", team);
    return this.http.post<any>(API_URL + '/teams', team, {headers: this.headers});
  }

  findById(id: string): Observable<any> {
    console.log(id)
    return this.http.get<any>(`${API_URL}/teams/${id}`, {headers: this.headers});
  }

  updateTeam(id: string, team: Team): Observable<any> {
    return this.http.patch<any>(`${API_URL}/teams/${id}`, team, {headers: this.headers});
  }

  deleteTeam(id: string): Observable<any> {
    return this.http.delete<any>(`${API_URL}/teams/${id}`, {headers: this.headers});
  }
}
