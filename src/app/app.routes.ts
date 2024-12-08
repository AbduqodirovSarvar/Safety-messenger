import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule) },
    { path: 'chat', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }
];
