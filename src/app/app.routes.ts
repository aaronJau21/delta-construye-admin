import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/shared/login/login.component';
import { LayoutsComponent } from './presentation/layouts/layouts.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: LayoutsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./presentation/pages/home/home.component'),
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./presentation/pages/brands/brands.component'),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./presentation/pages/categories/categories.component'),
      },
      {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full',
  },
];
