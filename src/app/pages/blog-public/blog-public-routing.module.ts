import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPublicComponent } from './blog-public.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPublicComponent,
  },
  {
    path: ':url',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPublicRoutingModule {}
