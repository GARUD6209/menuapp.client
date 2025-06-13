import { Component, OnInit } from '@angular/core';

import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { SidebarApiService } from '../../../data/services/sidebar-api.service';
import { AuthService } from '../../../core/services/auth.service';
import { FilterNoSubmenusPipe } from '../../pipes/filter-no-submenus.pipe';
import { FilterWithSubmenusPipe } from '../../pipes/filter-with-submenus.pipe';
import { MainMenu } from '../../../data/models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [FilterWithSubmenusPipe, FilterNoSubmenusPipe] // Add this line
  // standalone: true,

})
export class SidebarComponent implements OnInit {
  menus: MainMenu[] = [];
  loading = true;
  userRole: string | null = null;
  expandedMenus: { [key: number]: boolean } = {};

  constructor(
    private sidebarService: SidebarApiService,
    private authService: AuthService,
    private router: Router,
    private filterWithSubmenus: FilterWithSubmenusPipe,
    private filterNoSubmenus: FilterNoSubmenusPipe
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started to: ', event.url);
      }
      if (event instanceof NavigationError) {
        console.log('Navigation error: ', event.error);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended at: ', event.url);
      }
    });

  }

  ngOnInit(): void {
    this.userRole = this.authService.getRole();

    this.sidebarService.getSidebarForUser().subscribe({
      next: (data) => {
        this.menus = this.filterMenus(data, this.userRole);
        // Initialize expanded state for all menu groups (default: collapsed)
        this.menus.forEach(menu => {
          if (menu.submenus && menu.submenus.length) {
            this.expandedMenus[menu.id] = false;
          }
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // Use pipes in code rather than template
  getMenusWithoutSubmenus() {
    return this.filterNoSubmenus.transform(this.menus);
  }

  getMenusWithSubmenus() {
    return this.filterWithSubmenus.transform(this.menus);
  }

  toggleMenuExpansion(menuId: number, event: MouseEvent): void {
    // Stop the event to prevent the router from navigating
    event.stopPropagation();
    this.expandedMenus[menuId] = !this.expandedMenus[menuId];
  }

  private filterMenus(menus: MainMenu[], userRole: string | null): MainMenu[] {
    if (!userRole) return [];
    return menus
      .filter(menu =>
        menu.status === 'Active' &&
        menu.active &&
        !!menu.role &&
        menu.role.split(',').map(r => r.trim()).includes(userRole)
      )
      .map(menu => ({
        ...menu,
        submenus: (menu.submenus || []).filter(sub =>
          sub.status === 'Active' &&
          sub.active &&
          !!sub.role &&
          sub.role.split(',').map(r => r.trim()).includes(userRole)
        )
      }))
      .filter(menu =>
        !menu.submenus ||
        menu.submenus.length > 0 ||
        !menu.submenus
      );
  }

  getRole(): string | null {
    return this.authService.getRole();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.authService.getIsLoggedIn();
  }
}
