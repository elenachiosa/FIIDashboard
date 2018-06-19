import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'fd-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* => *', [
        style({
          opacity: 0,
        }),
        animate('.2s ease-in')
      ]),
    ])
  ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // change the animation state
    getRouteAnimation(outlet) {
      return outlet.activatedRouteData.animation
    }

}
