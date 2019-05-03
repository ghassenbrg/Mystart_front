import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token') || undefined
    })
  } 

  // HttpClient API get() method => Fetch
  get(uri): Observable<any> {
    return this.http.get<any>(this.apiURL + uri, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create
  post(uri, body): Observable<any> {
    return this.http.post<any>(this.apiURL + uri, JSON.stringify(body), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update
  update(uri, body): Observable<any> {
    return this.http.put<any>(this.apiURL + uri, JSON.stringify(body), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete
  delete(uri){
    return this.http.delete<any>(this.apiURL + uri, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

    // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
 }
