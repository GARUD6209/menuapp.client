import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  isLoading = false; // Add loading state

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (!this.username || !this.password) {
      this.error = 'Please enter both username and password';
      return;
    }

    this.error = '';
    this.isLoading = true;

    this.authService.login(this.username, this.password).subscribe({
      next: (success) => {
        this.isLoading = false;
        if (success) {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Login error:', error);

        // Handle different error scenarios
        if (error.status === 401) {
          this.error = 'Invalid username or password';
        } else if (error.status === 0) {
          this.error = 'Unable to connect to server. Please try again.';
        } else {
          this.error = 'Login failed. Please try again.';
        }
      }
    });
  }
}