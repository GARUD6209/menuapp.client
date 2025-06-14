import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';


import { FilterWithSubmenusPipe } from './pipes/filter-with-submenus.pipe';
import { FilterNoSubmenusPipe } from './pipes/filter-no-submenus.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FilterWithSubmenusPipe,
    FilterNoSubmenusPipe,
    BreadcrumbComponent,
    BreadcrumbItemDirective
  ],
  exports: [
    SidebarComponent,
    FilterWithSubmenusPipe,
    FilterNoSubmenusPipe,
    BreadcrumbComponent
  ]
})
export class SharedModule { }