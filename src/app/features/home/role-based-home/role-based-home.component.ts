// src/app/features/home/role-based-home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-role-based-home',
  template: '<div>Redirecting to dashboard...</div>', // Minimal template as it will redirect
  styles: []
})
export class RoleBasedHomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get user role and redirect accordingly
    const userRole = this.authService.getRole();

    switch (userRole) {
      case 'admin':
        this.router.navigate(['/admin']);
        break;
      case 'manager':
        this.router.navigate(['/manager']);
        break;
      case 'user':
        this.router.navigate(['/user']);
        break;
      default:
        // Default fallback if role doesn't match expected values
        this.router.navigate(['/login']);
        break;
    }
  }
}