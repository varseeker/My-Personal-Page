import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
=======
import { ResumeYazriComponent } from './home/resume-yazri/resume-yazri.component';
import { AboutComponent } from './about/about.component';
import { ResumeAhsanComponent } from './home/resume-ahsan/resume-ahsan.component';
import { ResumeYanuarComponent } from './home/resume-yanuar/resume-yanuar.component';
>>>>>>> origin/master


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
<<<<<<< HEAD
=======
    ResumeYazriComponent,
    AboutComponent,
    ResumeAhsanComponent,
    ResumeYanuarComponent
>>>>>>> origin/master
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
})
export class PagesModule { }
