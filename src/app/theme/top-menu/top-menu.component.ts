import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  login_form_hidden = true;
  register_form_hidden = true;
  isLogged = "";

  constructor(private cookieService: CookieService) {
   }

  ngOnInit() {
    this.isLogged = this.cookieService.get('isLogged');
  }

  openLoginForm() {
    this.login_form_hidden = false;
  }

  openRegisterForm() {
    this.register_form_hidden = false;
  }

  logOut() {
    this.cookieService.set( 'isLogged', 'false' );
    window.location.reload();
  }

}
