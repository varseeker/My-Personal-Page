import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';


@NgModule({
  declarations: [
    ContactComponent,
    ListContactComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
