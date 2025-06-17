import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export abstract class BaseApiService {
  protected readonly baseUrl = 'https://localhost:7039/api';

  constructor(protected http: HttpClient) { }

  public getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    if (token) {
      // Log token presence and partial value for debugging
      console.log('[BaseApiService][Auth] Token found:', token ? token.substring(0, 10) + '...' : 'none');
      headers = headers.set('Authorization', `Bearer ${token}`); // <-- FIX: reassign headers
    } else {
      console.warn('[BaseApiService][Auth] No token found in localStorage.');
    }

    return headers;
  }

  protected get<T>(url: string): Observable<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    const headers = this.getHeaders();

    // Log headers as a plain object for debugging
    console.log(`[BaseApiService][GET] Request to ${fullUrl} initiated.`);
    console.log(`[BaseApiService][GET] Headers:`, headers.keys().reduce((acc, key) => {
      acc[key] = headers.get(key);
      return acc;
    }, {} as any));

    return this.http.get<T>(fullUrl, { headers }).pipe(
      tap(data => {
        console.log(`[BaseApiService][GET] Response from ${fullUrl}:`, data);
      }),
      catchError(error => {
        if (error.status === 401) {
          console.error(`[BaseApiService][GET] 401 Unauthorized on ${fullUrl}.`);
          const token = localStorage.getItem('token');
          if (!token) {
            console.error('[BaseApiService][GET][401] No token present in localStorage.');
          } else {
            console.error('[BaseApiService][GET][401] Token present:', token ? token.substring(0, 10) + '...' : 'none');
          }
        } else {
          console.error(`[BaseApiService][GET] Error on ${fullUrl}:`, error);
        }
        return throwError(() => error);
      })
    );
  }

  protected post<T>(url: string, body: any): Observable<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    const headers = this.getHeaders();

    console.log(`[BaseApiService][POST] Request to ${fullUrl} initiated.`);
    console.log(`[BaseApiService][POST] Body:`, body);

    return this.http.post<T>(fullUrl, body, { headers }).pipe(
      tap(data => {
        console.log(`[BaseApiService][POST] Response from ${fullUrl}:`, data);
      }),
      catchError(error => {
        if (error.status === 401) {
          console.error(`[BaseApiService][POST] 401 Unauthorized on ${fullUrl}.`);
          const token = localStorage.getItem('token');
          if (!token) {
            console.error('[BaseApiService][POST][401] No token present in localStorage.');
          } else {
            console.error('[BaseApiService][POST][401] Token present:', token ? token.substring(0, 10) + '...' : 'none');
          }
        } else {
          console.error(`[BaseApiService][POST] Error on ${fullUrl}:`, error);
        }
        return throwError(() => error);
      })
    );
  }

  protected put<T>(url: string, body: any): Observable<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    const headers = this.getHeaders();

    console.log(`[BaseApiService][PUT] Request to ${fullUrl} initiated.`);
    console.log(`[BaseApiService][PUT] Body:`, body);

    return this.http.put<T>(fullUrl, body, { headers }).pipe(
      tap(data => {
        console.log(`[BaseApiService][PUT] Response from ${fullUrl}:`, data);
      }),
      catchError(error => {
        if (error.status === 401) {
          console.error(`[BaseApiService][PUT] 401 Unauthorized on ${fullUrl}.`);
          const token = localStorage.getItem('token');
          if (!token) {
            console.error('[BaseApiService][PUT][401] No token present in localStorage.');
          } else {
            console.error('[BaseApiService][PUT][401] Token present:', token ? token.substring(0, 10) + '...' : 'none');
          }
        } else {
          console.error(`[BaseApiService][PUT] Error on ${fullUrl}:`, error);
        }
        return throwError(() => error);
      })
    );
  }

  protected delete<T>(url: string): Observable<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    const headers = this.getHeaders();

    console.log(`[BaseApiService][DELETE] Request to ${fullUrl} initiated.`);

    return this.http.delete<T>(fullUrl, { headers }).pipe(
      tap(data => {
        console.log(`[BaseApiService][DELETE] Response from ${fullUrl}:`, data);
      }),
      catchError(error => {
        if (error.status === 401) {
          console.error(`[BaseApiService][DELETE] 401 Unauthorized on ${fullUrl}.`);
          const token = localStorage.getItem('token');
          if (!token) {
            console.error('[BaseApiService][DELETE][401] No token present in localStorage.');
          } else {
            console.error('[BaseApiService][DELETE][401] Token present:', token ? token.substring(0, 10) + '...' : 'none');
          }
        } else {
          console.error(`[BaseApiService][DELETE] Error on ${fullUrl}:`, error);
        }
        return throwError(() => error);
      })
    );
  }

  protected patch<T>(url: string, body: any): Observable<T> {
    const fullUrl = `${this.baseUrl}${url}`;
    const headers = this.getHeaders();

    console.log(`[BaseApiService][PATCH] Request to ${fullUrl} initiated.`);
    console.log(`[BaseApiService][PATCH] Body:`, body);

    return this.http.patch<T>(fullUrl, body, { headers }).pipe(
      tap(data => {
        console.log(`[BaseApiService][PATCH] Response from ${fullUrl}:`, data);
      }),
      catchError(error => {
        if (error.status === 401) {
          console.error(`[BaseApiService][PATCH] 401 Unauthorized on ${fullUrl}.`);
          const token = localStorage.getItem('token');
          if (!token) {
            console.error('[BaseApiService][PATCH][401] No token present in localStorage.');
          } else {
            console.error('[BaseApiService][PATCH][401] Token present:', token ? token.substring(0, 10) + '...' : 'none');
          }
        } else {
          console.error(`[BaseApiService][PATCH] Error on ${fullUrl}:`, error);
        }
        return throwError(() => error);
      })
    );
  }
}