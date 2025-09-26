import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'canada',
        loadComponent: () =>
          import('../pages/canada/canada.page').then((m) => m.CanadaPage),
      },
      {
        path: 'ontario',
        loadComponent: () =>
          import('../pages/ontario/ontario.page').then((m) => m.OntarioPage),
      },
      {
        path: 'details',
        loadComponent: () =>
          import('../pages/details/details.page').then((m) => m.DetailsPage),
      },
      { path: '', redirectTo: '/tabs/canada', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/tabs/canada', pathMatch: 'full' },
];
