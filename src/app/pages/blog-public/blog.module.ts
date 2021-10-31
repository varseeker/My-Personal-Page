import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogService } from 'src/app/dashboard/blog/service/blog.service';
import { BlogPublicComponent } from './blog.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    BlogPublicComponent,
    ListBlogComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
