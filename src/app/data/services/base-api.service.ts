import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export abstract class BaseApiService {
  constructor(protected http: HttpClient) {}

get<T>(url: string): Observable<T> {
  console.log(`[BaseApiService][GET] Request to ${url} initiated.`);
  return this.http.get<T>("https://localhost:7039/api/Menu").pipe(
    tap(data => {
      console.log(`[BaseApiService][GET] Response from ${url}:`, data);
    }),
    catchError(error => {
      console.error(`[BaseApiService][GET] Error on ${url}:`, error);
      return throwError(() => error);
    })
  );
}


  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body).pipe(
      catchError(error => {
        console.error(`[BaseApiService][POST] Error on ${url}:`, error);
        return throwError(() => error);
      })
    );
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body).pipe(
      catchError(error => {
        console.error(`[BaseApiService][PUT] Error on ${url}:`, error);
        return throwError(() => error);
      })
    );
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(
      catchError(error => {
        console.error(`[BaseApiService][DELETE] Error on ${url}:`, error);
        return throwError(() => error);
      })
    );
  }
}
