import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [
      { path: 'canada', loadComponent: () => import('./pages/canada-summary/canada-summary.page').then(m => m.CanadaSummaryPage) },
      { path: 'ontario', loadComponent: () => import('./pages/ontario/ontario.page').then(m => m.OntarioPage) },
      { path: 'details', loadComponent: () => import('./pages/details/details.page').then(m => m.DetailsPage) },
      { path: '', redirectTo: 'canada', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '' }
];
