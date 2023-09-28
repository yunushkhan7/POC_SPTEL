import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home' }
  },
  {
    path: 'products-list',
    loadChildren: () => import('./module/product-list/product-list.module').then(m => m.ProductListModule),
    data: { title: 'Product List' }
  },
  {
    path: 'cart-list',
    loadChildren: () => import('./module/shoping-cart/shoping-cart.module').then(m => m.ShopingCartModule),
    data: { title: 'Cart List' }
  },
  {
    path: 'verify-age',
    loadChildren: () => import('./module/verify-age/verify-age.module').then(m => m.VerifyAgeModule),
    data: { title: 'Verify Age' }
  },
  {
    path: 'validate-face',
    loadChildren: () => import('./module/validate-face/validate-face.module').then(m => m.ValidateFaceModule),
    data: { title: 'Validate Face' },
  },
  {
    path: '',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
