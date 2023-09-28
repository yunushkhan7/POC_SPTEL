import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopingCartComponent } from './shoping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ChangeAgeComponent } from './change-age/change-age.component';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: ShopingCartComponent,
    data: { title: 'Cart List' }
  },
  {
    path: 'change-age',
    component: ChangeAgeComponent,
    data: { title: 'Change Age' }
  }

]

@NgModule({
  declarations: [
    ShopingCartComponent,
    ChangeAgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class ShopingCartModule { }
