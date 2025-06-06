import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: 'settings',
  //   loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  // },
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  // },
  // {
  //   path: 'services',
  //   loadComponent: () => import('./services/services.page').then( m => m.ServicesPage)
  // },
  // {
  //   path: 'profile',
  //   loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  // },
];
