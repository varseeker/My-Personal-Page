import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPublicRoutingModule } from './blog-public-routing.module';
import { BlogPublicComponent } from './blog-public.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogPublicComponent,
    ListBlogComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BlogPublicRoutingModule,
    SharedModule
  ]
})
export class BlogPublicModule { }
