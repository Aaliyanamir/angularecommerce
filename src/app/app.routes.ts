import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop';
import { Category } from './pages/category/category';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: '/',
        component:Home
    },
    {
        path: '/about',
        component:About
    },
    {
        path: '/shop',
        component:Shop
    },
    {
        path: '/category',
        component:Category
    },
    {
        path: '/contact',
        component:Contact
    },
];
