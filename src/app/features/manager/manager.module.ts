import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard.component';
import { ManagerComponent } from './pages/manager-dashboard/manager.component';


@NgModule({
  declarations: [
    ManagerDashboardComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
