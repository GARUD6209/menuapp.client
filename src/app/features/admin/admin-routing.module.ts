import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './pages/admin-dashboard/admin.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';




const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    data: { breadcrumb: 'Dashboard' }
  },
  {
    path: 'user/add',
    component: AddUserComponent,
    data: { breadcrumb: 'Add User' }
  },
  {
    path: 'profile',
    component: AdminComponent,
    data: { breadcrumb: 'Profile' }
  },
  {
    path: 'user/view',
    component: ViewUserComponent,
    data: { breadcrumb: 'Profile' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }