import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyAgeComponent } from './verify-age.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {
    path: '',
    component: VerifyAgeComponent,
    data: { title: 'Verify Age' }
  }
]

@NgModule({
  declarations: [
    VerifyAgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VerifyAgeModule { }
