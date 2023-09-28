import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  slideConfig2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    dots: false,
    nav:true,
    
  };



}
