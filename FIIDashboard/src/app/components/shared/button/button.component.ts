import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() secondary: boolean = false;
  @Input() large: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
