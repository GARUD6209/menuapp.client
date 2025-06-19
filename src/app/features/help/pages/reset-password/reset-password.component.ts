import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { ResetPasswordRequest } from '../../../../core/models/user.model';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'] // fixed property name
})
export class ResetPasswordComponent {

  constructor(
    private authService: AuthService
    // Removed MatDialog injection since we use alert
  ) { }

  resetPassword(req: ResetPasswordRequest) {
    // Add username from local storage
    const username = localStorage.getItem('username');
    if (username) {
      (req as any).username = username; // ensure property exists
    }

    this.authService.resetPassword(req).subscribe({
      next: (response) => {
        alert('Password reset successful!'); // user feedback
      },
      error: (error) => {
        alert('Error resetting password. Please try again.');
        console.error('Error resetting password', error);
      }
    });
  }
}


