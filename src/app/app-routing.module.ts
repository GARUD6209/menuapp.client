import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NotAuthorizedComponent } from './features/auth/pages/not-authorized.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
      //   canActivate: [AuthGuard, RoleGuard],
      //   data: { roles: ['admin'] }
      // },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['admin'] }
      },
      {
        path: 'manager',
        loadChildren: () => import('./features/manager/manager.module').then(m => m.ManagerModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['manager'] }
      },
      {
        path: 'user',
        loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['user'] }
      },
      {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'help',
        loadChildren: () => import('./features/help/help.module').then(m => m.HelpModule),
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'not-authorized',
        component: NotAuthorizedComponent // Move this to auth feature
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }