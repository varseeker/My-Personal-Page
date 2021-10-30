import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestBookRoutingModule } from './guest-book-routing.module';
import { GuestBookComponent } from './guest-book.component';
import { GuestbookListComponent } from './guestbook-list/guestbook-list.component';
import { GuestbookFormComponent } from './guestbook-form/guestbook-form.component';
import { DashboardModule } from '../dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GuestBookComponent,
    GuestbookListComponent,
    GuestbookFormComponent
  ],
  imports: [
    CommonModule,
    GuestBookRoutingModule,
    DashboardModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class GuestBookModule { }
