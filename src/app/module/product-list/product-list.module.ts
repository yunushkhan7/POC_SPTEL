import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes : Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { title: 'Product List' }
  }
]


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductListModule { }
