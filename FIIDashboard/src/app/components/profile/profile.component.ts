import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private email: string = "claudia.ionescu@gmail.com";
  private tel: string = "0745454445";

  constructor() { }

  ngOnInit() {
  }

}
