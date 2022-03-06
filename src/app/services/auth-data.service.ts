import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Cookie} from "ng2-cookies";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  private REST_API_SERVER = environment.apiUrl;


  constructor(private httpClient: HttpClient) {
  }

  public authLogin(user:User): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;',
    });
    return (
      this.httpClient
        .post<any>(this.REST_API_SERVER + "/login", user, {headers: headers})
        .pipe(catchError(this.handleError))
    );
  }


  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log('Error', errorMessage);
    return throwError(errorMessage);
  }
}
