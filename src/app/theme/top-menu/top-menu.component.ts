import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  login_form_hidden = true;
  register_form_hidden = true;

  constructor() {
   }

  ngOnInit() {
  }

  openLoginForm() {
    this.login_form_hidden = false;
  }

  openRegisterForm() {
    this.register_form_hidden = false;
  }

}
