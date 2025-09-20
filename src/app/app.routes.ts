import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { About } from './core/about/about';

export const routes: Routes = [
    {
        path: 'home', component: Home
    },
    {
        path: 'about', component: About
    },
    {
        path: 'users', loadComponent: () => import('./users/components/user-list/user-list').then(u => u.UserList)
    },
    {
        path: 'posts',
        loadChildren: () => import('./post/post-module').then(m => m.PostModule)
    }
];
