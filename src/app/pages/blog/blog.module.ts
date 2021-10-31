import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { ListBlogComponent } from './component/list-blog/list-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogService } from 'src/app/dashboard/blog/service/blog.service';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    BlogComponent,
    ListBlogComponent,
    DetailsComponent,
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
