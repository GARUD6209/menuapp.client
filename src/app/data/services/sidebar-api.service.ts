import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { BaseApiService } from './base-api.service';

@Injectable({ providedIn: 'root' })
export class SidebarApiService {
  // constructor(private baseApi: BaseApiService) { }

  getSidebarForUser(): Observable<MainMenu[]> {
    // Mocked menu with nested submenus and role-based access
    const mockData: MainMenu[] = [


      // Admin-specific menus
      {
        id: 3,
        menu_name: 'Admin Panel',
        module: 'Admin',
        status: 'Active',
        active: true,
        path: '/admin',
        role: 'admin',
        icon: 'admin_panel_settings',
        submenus: [
          {
            id: 441,
            main_menuid: 4,
            status: 'Active',
            active: true,
            sub_menu_name: 'Admin Profile',
            path: '/admin/profile',
            role: 'admin',
            icon: 'supervisor_account'
          },
          {
            id: 31,
            main_menuid: 3,
            status: 'Active',
            active: true,
            sub_menu_name: 'System Settings',
            path: '/admin/system',
            role: 'admin',
            icon: 'settings'
          },
          {
            id: 32,
            main_menuid: 3,
            status: 'Active',
            active: true,
            sub_menu_name: 'System Logs',
            path: '/admin/logs',
            role: 'admin',
            icon: 'article'
          }
        ]
      },

      // Admin-only user management
      {
        id: 4,
        menu_name: 'User Management',
        module: 'User',
        status: 'Active',
        active: true,
        path: '/user-management',
        role: 'admin',
        icon: 'group',
        submenus: [
          {
            id: 41,
            main_menuid: 4,
            status: 'Active',
            active: true,
            sub_menu_name: 'All Users',
            path: '/user/all',
            role: 'admin',
            icon: 'supervisor_account'
          },
          {
            id: 42,
            main_menuid: 4,
            status: 'Active',
            active: true,
            sub_menu_name: 'Add User',
            path: '/user/add',
            role: 'admin',
            icon: 'person_add'
          },
          {
            id: 43,
            main_menuid: 4,
            status: 'Active',
            active: true,
            sub_menu_name: 'Role Management',
            path: '/user/roles',
            role: 'admin',
            icon: 'security'
          }
        ]
      },

      // Manager-specific menus
      {
        id: 5,
        menu_name: 'Manager Dashboard',
        module: 'Management',
        status: 'Active',
        active: true,
        path: '/manager',
        role: 'manager',
        icon: 'dashboard_customize',
        submenus: [
          {
            id: 51,
            main_menuid: 5,
            status: 'Active',
            active: true,
            sub_menu_name: 'Manager Profile',
            path: '/manager/profile',
            role: 'manager',
            icon: 'home'
          },
          {
            id: 52,
            main_menuid: 5,
            status: 'Active',
            active: true,
            sub_menu_name: 'Reports',
            path: '/manager/reports',
            role: 'manager',
            icon: 'assessment'
          },
          {
            id: 53,
            main_menuid: 5,
            status: 'Active',
            active: true,
            sub_menu_name: 'Approve Requests',
            path: '/manager/approve',
            role: 'manager',
            icon: 'check_circle'
          }
        ]
      },

      // Manager user management (limited compared to admin)
      {
        id: 6,
        menu_name: 'Team Management',
        module: 'User',
        status: 'Active',
        active: true,
        path: '/team',
        role: 'manager',
        icon: 'people',
        submenus: [
          {
            id: 61,
            main_menuid: 6,
            status: 'Active',
            active: true,
            sub_menu_name: 'My Team',
            path: '/team/members',
            role: 'manager',
            icon: 'groups'
          },
          {
            id: 62,
            main_menuid: 6,
            status: 'Active',
            active: true,
            sub_menu_name: 'Add Team Member',
            path: '/team/add',
            role: 'manager',
            icon: 'person_add'
          }
        ]
      },

      // Regular user menus
      {
        id: 7,
        menu_name: 'User Dashboard',
        module: 'User',
        status: 'Active',
        active: true,
        path: '/user',
        role: 'user',
        icon: 'account_circle',
        submenus: [
          {
            id: 71,
            main_menuid: 7,
            status: 'Active',
            active: true,
            sub_menu_name: 'User Profile',
            path: '/user/profile',
            role: 'user',
            icon: 'home'
          },
          {
            id: 72,
            main_menuid: 7,
            status: 'Active',
            active: true,
            sub_menu_name: 'My Tasks',
            path: '/user/tasks',
            role: 'user',
            icon: 'task'
          }
        ]
      },

      // Help & Support - available to all roles
      {
        id: 8,
        menu_name: 'Help & Support',
        module: 'Help',
        status: 'Active',
        active: true,
        path: '/help',
        role: 'admin,manager,user',
        icon: 'help_outline',
        submenus: [
          {
            id: 81,
            main_menuid: 8,
            status: 'Active',
            active: true,
            sub_menu_name: 'FAQ',
            path: '/help/faq',
            role: 'admin,manager,user',
            icon: 'quiz'
          },
          {
            id: 82,
            main_menuid: 8,
            status: 'Active',
            active: true,
            sub_menu_name: 'Contact Support',
            path: '/help/contact',
            role: 'admin,manager,user',
            icon: 'contact_support'
          }
        ]
      }
    ];
    return of(mockData);
  }
}

export interface MainMenu {
  id: number;
  menu_name: string;
  module: string;
  status: string;
  active: boolean;
  path: string;
  role: string;
  submenus?: SubMenu[];
  icon?: string;
}

export interface SubMenu {
  id: number;
  main_menuid: number;
  status: string;
  active: boolean;
  sub_menu_name: string;
  path: string;
  role: string;
  icon?: string;
}
