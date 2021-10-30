import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeYanuarComponent } from './resume-yanuar.component';

const routes: Routes = [{ path: '', component: ResumeYanuarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeYanuarRoutingModule { }
