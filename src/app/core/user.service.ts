import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private authService: AuthService) { }

  getCurrentRole() {
    return this.authService.getRole();
  }

  getIsLoggedIn() {
    return this.authService.getIsLoggedIn();
  }
}
