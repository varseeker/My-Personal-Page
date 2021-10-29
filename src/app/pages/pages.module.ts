import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { ListContactComponent } from './contact/list-contact/list-contact.component';
import { FormContactComponent } from './contact/form-contact/form-contact.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    ListContactComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
})
export class PagesModule { }
