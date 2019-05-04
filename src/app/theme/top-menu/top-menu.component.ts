import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RestApiService } from 'src/app/core/rest-api.service';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input() loggedUser;
  login_form_hidden = true;
  register_form_hidden = true;


  constructor(private auth: AuthenticationService) {
   }

  ngOnInit() {
  }

  openLoginForm() {
    this.login_form_hidden = false;
  }

  openRegisterForm() {
    this.register_form_hidden = false;
  }

  logOut() {
    this.auth.logOut();
  }

  externelPorfilPicUrl(porfilpic) {
    if((porfilpic.search('http://') == -1) && ((porfilpic.search('https://') == -1))) {
      return false;
    }
    return true;
  }

}
