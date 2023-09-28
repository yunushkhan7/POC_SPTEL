import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CustomReact from './CustomReact';

@Component({
  selector: 'app-camera',
  template: `<div id="react-root"></div>`,
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnChanges, AfterViewInit, OnDestroy {
  public rootId = "react-root";

  constructor(){

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();

  }

  ngOnDestroy(): void {

  }



  private render() {
    const root = ReactDOM.createRoot(document.getElementById(this.rootId)!);

    root.render(
      React.createElement(CustomReact)
    )
  }


}
