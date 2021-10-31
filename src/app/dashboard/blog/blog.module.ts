import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogService } from './service/blog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard.module';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogFormComponent,
    ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
