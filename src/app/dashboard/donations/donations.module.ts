import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationsRoutingModule } from './donations-routing.module';
import { DonationsComponent } from './donations.component';
import { DonationsListComponent } from './donations-list/donations-list.component';
import { DonationsFormComponent } from './donations-form/donations-form.component';
import { DashboardModule } from '../dashboard.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DonationsComponent,
    DonationsListComponent,
    DonationsFormComponent
  ],
  imports: [
    CommonModule,
    DonationsRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    SharedModule
  ]
})
export class DonationsModule { }
