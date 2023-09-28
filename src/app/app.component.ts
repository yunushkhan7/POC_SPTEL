import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'supermark-kiosk';


  public ngOnInit(){
    $('.sidebarBtn').click(function(){
      $('.sidebar').toggleClass('active');
    });
  }
}
