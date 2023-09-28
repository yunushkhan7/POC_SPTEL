import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 

  slideConfig = {
    centerMode: true,
    slidesToShow: 1,
    arrows: false, 
    dots: false,
    nav:true,
    infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  };




}
