import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SidebarApiService } from '../../../data/services/sidebar-api.service';
import { AuthService } from '../../../core/services/auth.service';
import { FilterNoSubmenusPipe } from '../../pipes/filter-no-submenus.pipe';
import { FilterWithSubmenusPipe } from '../../pipes/filter-with-submenus.pipe';
import { MainMenu } from '../../../data/models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [FilterWithSubmenusPipe, FilterNoSubmenusPipe]
})
export class SidebarComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

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
    router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe(event => {
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

    this.sidebarService.getSidebarForUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          console.log('Sidebar data loaded:', data);
          this.menus = this.filterMenus(data, this.userRole);
          this.initializeExpandedState();
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading sidebar data:', error);
          this.loading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.clearData();
  }

  // Use pipes in code rather than template
  getMenusWithoutSubmenus(): MainMenu[] {
    return this.filterNoSubmenus.transform(this.menus);
  }

  getMenusWithSubmenus(): MainMenu[] {
    return this.filterWithSubmenus.transform(this.menus);
  }

  toggleMenuExpansion(menuId: number, event: MouseEvent): void {
    event.stopPropagation();
    this.expandedMenus[menuId] = !this.expandedMenus[menuId];
  }

  private initializeExpandedState(): void {
    this.menus.forEach(menu => {
      if (menu.subMenus && menu.subMenus.length > 0) {
        this.expandedMenus[menu.id] = false;
      }
    });
  }

  private filterMenus(menus: MainMenu[], userRole: string | null): MainMenu[] {
    if (!userRole) return [];

    return menus
      .filter(menu =>
        menu.status === true &&  // Changed from 'Active' to true
        menu.active &&
        !!menu.role &&
        menu.role.split(',').map(r => r.trim()).includes(userRole)
      )
      .map(menu => ({
        ...menu,
        subMenus: (menu.subMenus || []).filter(sub =>
          sub.status === true &&  // Changed from 'Active' to true
          sub.active &&
          !!sub.role &&
          sub.role.split(',').map(r => r.trim()).includes(userRole)
        )
      }))
      .filter(menu =>
        !menu.subMenus ||
        menu.subMenus.length > 0 ||
        !menu.subMenus
      );
  }

  /**
   * Manually clear all loaded data
   */
  clearMenuData(): void {
    this.menus = [];
    this.expandedMenus = {};
    this.loading = true;
    console.log('Menu data cleared');
  }

  /**
   * Reload data from API
   */
  reloadMenuData(): void {
    this.clearMenuData();
    this.ngOnInit();
  }

  private clearData(): void {
    this.menus = [];
    this.expandedMenus = {};
    this.userRole = null;
    this.loading = true;
  }

  getRole(): string | null {
    return this.authService.getRole();
  }

  logout(): void {
    this.clearMenuData();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.getIsLoggedIn();
  }
}