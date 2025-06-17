import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoginRequest, LoginResponse, RegisterRequest } from '../models/user.model';



@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'https://localhost:7039/api/Auth/login';
  private isLoggedIn = false;
  private role: string | null = null;
  private token: string | null = null;

  constructor(private http: HttpClient) {
    // Load from localStorage when the app starts
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<boolean> {
    const loginRequest: LoginRequest = { username, password };

    return this.http.post<LoginResponse>(this.API_URL, loginRequest).pipe(
      tap(response => {
        // Store authentication data
        this.isLoggedIn = true;
        this.role = response.role.toLowerCase(); // Ensure role is lowercase
        this.token = response.token;

        // Persist to localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('role', response.role.toLowerCase());
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username);
        localStorage.setItem('userId', response.id.toString());
      }),
      map(() => true)
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.role = null;
    this.token = null;

    // Clear localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
  }

  register(registerRequest: RegisterRequest): Observable<any> {
    const url = 'https://localhost:7039/api/Auth/register';
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    if (token) {
      // Log token presence and partial value for debugging
      console.log('[AuthService][Auth] Token found:', token ? token.substring(0, 10) + '...' : 'none');
      headers = headers.set('Authorization', `Bearer ${token}`); // <-- FIX: reassign headers
    } else {
      console.warn('[AuthService][Auth] No token found in localStorage.');
    }

    return this.http.post(url, registerRequest, { headers });
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getRole(): string | null {
    return this.role;
  }

  getToken(): string | null {
    return this.token;
  }

  // Additional helper methods
  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? parseInt(userId, 10) : null;
  }
}