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
import { HomeService } from './home/service/home.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeYanuarModule } from './home/resume-yanuar/resume-yanuar.module';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
    ResumeYazriComponent,
    AboutComponent,
    ResumeAhsanComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ResumeYanuarModule
  ],
  providers: [
    HomeService
  ]
})
export class PagesModule { }
