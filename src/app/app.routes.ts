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
];
