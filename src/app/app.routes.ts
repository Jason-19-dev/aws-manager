import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'aws/login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  


];
