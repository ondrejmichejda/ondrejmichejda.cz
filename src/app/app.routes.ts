import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/ondra',
        pathMatch: 'full'
    },
    {
        path: 'ondra',
        loadComponent: () => import('./pages/ondra/ondra').then(m => m.Ondra)
    },
    {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog').then(m => m.Blog)
    },
    {
        path: 'kontakt',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    }
];
