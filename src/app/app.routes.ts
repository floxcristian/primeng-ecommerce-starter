import { Routes } from '@angular/router';
import { NotFoundComponent } from './modules/site/pages/not-found/not-found.component';
import { MainLayoutComponent } from './modules/shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/home/pages/home/home.component')
            },
            {
                path: 'product',
                loadComponent: () => import('./modules/product/pages/product-list/product-list.component')
            },
            {
                path: 'product/:id',
                loadComponent: () => import('./modules/product/pages/product-detail/product-detail.component')
            }
        ]
    },
    
    {
        path: '**',
        component: NotFoundComponent
    }
];
