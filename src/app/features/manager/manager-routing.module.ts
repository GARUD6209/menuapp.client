import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './pages/manager-dashboard/manager.component';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerDashboardComponent,
    data: { breadcrumb: 'Dashboard' }
  },
  {
    path: 'profile',
    component: ManagerComponent,
    data: { breadcrumb: 'Profile' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
