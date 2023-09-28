import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'home' }
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
