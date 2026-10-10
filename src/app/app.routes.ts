import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Shop } from './pages/shop/shop';
import { Category } from './pages/category/category';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Wishlist } from './pages/wishlist/wishlist';
import { Cart } from './pages/cart/cart';
import { Orders } from './pages/orders/orders';
import { Register } from './pages/register/register';
import { Faq } from './pages/faq/faq';

export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path: 'about',
        component:About
    },
    {
        path: 'shop',
        component:Shop
    },
    {
        path: 'category',
        component:Category
    },
    {
        path: 'contact',
        component:Contact
    },
    {
        path: 'login',
        component:Login
    },
    {
        path: 'wishlist',
        component:Wishlist
    },
    {
        path: 'cart',
        component:Cart
    },
    {
        path: 'orders',
        component:Orders
    },
    {
        path: 'register',
        component:Register
    },
    {
        path: 'faq',
        component:Faq
    },
];
