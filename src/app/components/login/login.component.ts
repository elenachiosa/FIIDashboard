import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = "ionescu.claudia@gmail.com";
  public password: string = "test1234";

  constructor() { }

  ngOnInit() {
  }

}
