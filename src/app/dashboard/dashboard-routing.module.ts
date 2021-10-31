import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../shared/guard/route.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'guest', canActivate:[RouteGuard] , loadChildren: () => import('./guest-book/guest-book.module').then(m => m.GuestBookModule) },
  { path: 'donate', canActivate:[RouteGuard] ,loadChildren: () => import('./donations/donations.module').then(m => m.DonationsModule) },
  { path: 'blog', canActivate:[RouteGuard] ,loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
