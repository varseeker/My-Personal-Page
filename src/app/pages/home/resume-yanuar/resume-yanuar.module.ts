import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeYanuarComponent } from './resume-yanuar.component';
import { AsideComponent } from './component/aside/aside.component';
import { ContentComponent } from './component/content/content.component';
import { ResumeYanuarRoutingModule } from './resume-yanuar-routing.module';



@NgModule({
  declarations: [
    ResumeYanuarComponent,
    AsideComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ResumeYanuarRoutingModule
  ],
  exports: [
    ResumeYanuarComponent
  ]
})
export class ResumeYanuarModule { }
