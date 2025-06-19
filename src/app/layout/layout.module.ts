import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add this import
import { SharedModule } from '../shared/shared.module'; // Add this import

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    SharedModule  // Import SharedModule to use app-sidebar
  ],
  exports: [
    MainLayoutComponent,
    AuthLayoutComponent
  ]
})
export class LayoutModule { }