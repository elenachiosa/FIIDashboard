import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public email: string = "claudia.ionescu@gmail.com";
  public tel: string = "0745454445";

  constructor() { }

  ngOnInit() {
  }

}
