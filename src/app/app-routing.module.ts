import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouteGuard } from './shared/guard/route.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'dashboard', canActivate:[RouteGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
