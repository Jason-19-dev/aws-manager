import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'aws',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('../aws-services/services.page').then((m) => m.ServicesPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'ec2',
        loadComponent: () =>
          import('../aws-services/ec2/ec2.page').then((m) => m.Ec2Page),
      },
      {
        path: 'rds',
        loadComponent: () => import('../aws-services/rds/rds.page').then(m => m.RdsPage)
      },
      {
        path: 'lambda',
        loadComponent: () => import('../aws-services/lambda/lambda.page').then(m => m.LambdaPage)
      },
      {
        path: 'api gateway',
        loadComponent: () => import('../aws-services/apigateway/apigateway.page').then(m => m.ApigatewayPage)
      },
      {
        path: '',
        redirectTo: '/aws/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/aws/login',
    pathMatch: 'full',
  },
];
