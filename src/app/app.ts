import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { About } from './pages/about/about';
// import { Contact } from './pages/contact/contact';
// import { Orders } from './pages/orders/orders';
// import { Shop } from './pages/shop/shop';
// import { Cart } from './pages/cart/cart';
// import { Wishlist } from './pages/wishlist/wishlist';
// import { Account } from './pages/account/account';
// import { Category } from './pages/category/category';
// import { Checkout } from './pages/checkout/checkout';
// import { Faq } from './pages/faq/faq';
// import { Login } from './pages/login/login';
// import { Product } from './pages/product/product';
// import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Navbar } from './pages/navbar/navbar';
import { About } from './pages/about/about';
import { Account } from './pages/account/account';
import { Cart } from './pages/cart/cart';
import { Category } from './pages/category/category';
import { Checkout } from './pages/checkout/checkout';
import { Contact } from './pages/contact/contact';
import { Faq } from './pages/faq/faq';
import { Login } from './pages/login/login';
import { Orders } from './pages/orders/orders';
import { Product } from './pages/product/product';
import { Register } from './pages/register/register';
import { Shop } from './pages/shop/shop';
import { Wishlist } from './pages/wishlist/wishlist';
import { Footer } from './pages/footer/footer';
import {RouterOutlet } from '@angular/router';

@Component({
  imports: [Navbar, Home,About,Account,Cart,Category,Checkout,Contact,Faq,Login,Orders,Product,Register,Shop,Wishlist,Footer,RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ecomerce');
}
