import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeYazriComponent } from './home/resume-yazri/resume-yazri.component';
import { AboutComponent } from './about/about.component';
import { ResumeAhsanComponent } from './home/resume-ahsan/resume-ahsan.component';
import { AsideComponent } from './home/resume-yanuar/component/aside/aside.component';
import { ContentComponent } from './home/resume-yanuar/component/content/content.component';
import { ResumeYanuarComponent } from './home/resume-yanuar/resume-yanuar.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
    ResumeYazriComponent,
    AboutComponent,
    ResumeAhsanComponent,
    AsideComponent,
    ContentComponent,
    ResumeYanuarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
})
export class PagesModule { }
