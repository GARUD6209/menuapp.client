import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleBasedHomeComponent } from './role-based-home/role-based-home.component';


const routes: Routes = [
  { path: '', component: RoleBasedHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
