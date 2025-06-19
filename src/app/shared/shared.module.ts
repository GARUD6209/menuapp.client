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
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';


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
    BreadcrumbItemDirective,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatError,

  ],
  exports: [
    SidebarComponent,
    FilterWithSubmenusPipe,
    FilterNoSubmenusPipe,
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FilterWithSubmenusPipe,
    FilterNoSubmenusPipe,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatError,


  ]
})
export class SharedModule { }