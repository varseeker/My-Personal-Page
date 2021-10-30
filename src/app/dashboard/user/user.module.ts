import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    DataTablesModule
  ],
  exports: [
    UserComponent,
    UserFormComponent,
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
