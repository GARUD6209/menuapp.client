import { NgModule } from '@angular/core';

import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SharedModule } from '../../shared/shared.module';
import { HelpRoutingModule } from './help-routing.module';




@NgModule({
  declarations: [
    FaqComponent,
    ContactComponent,
    ResetPasswordComponent

  ],
  imports: [
    SharedModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
