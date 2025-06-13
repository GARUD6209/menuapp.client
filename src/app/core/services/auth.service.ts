import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;
  private role: string | null = null;

  constructor() {
    // Load from localStorage when the app starts
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
    this.role = localStorage.getItem('role');
  }

  login(username: string, password: string): boolean {
    if (username === 'admin') {
      this.role = 'admin';
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      return true;
    }
    if (username === 'user') {
      this.role = 'user';
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'user');
      return true;
    }
    if (username === 'manager') {
      this.role = 'manager';
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'manager');
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.role = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getRole() {
    return this.role;
  }
}
