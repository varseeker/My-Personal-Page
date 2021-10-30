import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactServiceService } from './service/contact-service.service';


@NgModule({
  declarations: [
    ContactComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent
  ],
  providers: [
    ContactServiceService
  ]
})
export class ContactModule { }
