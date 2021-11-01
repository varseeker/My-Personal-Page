import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ]
})
export class DashboardModule { }
