import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  router: Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

  showMenu() {
    let body = document.getElementsByTagName('body')[0];

    body.classList.remove('menu-close');
    body.classList.add('menu-open');

  }



}
