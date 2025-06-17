import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {
  username = '';
  password = '';
  role = '';
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  onSubmit() {
    const registerRequest: RegisterRequest = {
      username: this.username,
      password: this.password,
      role: parseInt(this.role)
    };

    this.authService.register(registerRequest).subscribe({
      next: () => {
        this.successMessage = 'User registered successfully!';
        this.errorMessage = '';
        this.username = '';
        this.password = '';
        this.role = '';
        this.openDialog('Success', this.successMessage);
      },
      error: (err) => {
        this.successMessage = '';
        this.errorMessage = err?.error?.message || 'Registration failed.';
        this.openDialog('Error', this.errorMessage);
      }
    });
  }

  openDialog(title: string, message: string): void {
    this.dialog.open(SimpleDialogComponent, {
      data: { title, message }
    });
  }
}

// Dialog component for displaying messages
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../../core/services/auth.service';
import { RegisterRequest } from '../../../../core/models/user.model';


@Component({
  selector: 'app-simple-dialog',
  template: `
    <h2 mat-dialog-title>{{data.title}}</h2>
    <mat-dialog-content>{{data.message}}</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>OK</button>
    </mat-dialog-actions>
  `
})
export class SimpleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }) { }
}
