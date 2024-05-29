import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./home/home.component').then(h => h.HomeComponent) },
    { path: 'user', loadComponent: () => import('./user/user.component').then(u => u.UserComponent) },
    { path: 'admin', loadComponent: () => import('./admin/admin.component').then(a => a.AdminComponent) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
