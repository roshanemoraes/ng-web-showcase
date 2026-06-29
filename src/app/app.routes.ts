import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./features/home/home').then((m) => m.Home);
    },
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./features/todos/todos').then((m) => m.Todos);
    },
  },
];
