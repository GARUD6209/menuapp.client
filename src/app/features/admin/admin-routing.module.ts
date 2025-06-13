import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './pages/admin-dashboard/admin.component';


const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'logs', component: AdminDashboardComponent }, // Update with actual logs component
  { path: 'settings', component: AdminDashboardComponent }, // Update with actual settings component
  { path: 'profile', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }