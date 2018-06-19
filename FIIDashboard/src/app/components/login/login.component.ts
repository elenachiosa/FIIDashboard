import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email: string = "ionescu.claudia@gmail.com";
  private password: string = "test1234";

  constructor() { }

  ngOnInit() {
  }

}
