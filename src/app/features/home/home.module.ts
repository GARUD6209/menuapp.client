import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { RoleBasedHomeComponent } from './role-based-home/role-based-home.component';


@NgModule({
  declarations: [
    RoleBasedHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }