import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';


@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="isLoggedIn(); else showLogin">
      <app-main-layout></app-main-layout>
    </ng-container>
    <ng-template #showLogin>
      <router-outlet></router-outlet>
    </ng-template>
  `,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'menuapp.client';

  constructor(private authService: AuthService) { }

  isLoggedIn() {
    return this.authService.getIsLoggedIn();
  }
}
