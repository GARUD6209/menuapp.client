import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UserComponent } from './pages/user-dashboard/user.component';



const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    data: { breadcrumb: 'Dashboard' }
  },
  {
    path: 'profile',
    component: UserComponent,
    data: { breadcrumb: 'Profile' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
