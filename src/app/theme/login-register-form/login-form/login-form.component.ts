import { Component, OnInit, Input } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';
import { RestApiService } from 'src/app/core/rest-api.service';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() isHidden;
  loginForm = {
    uniqueId: "",
    password: ""
  };
  notif = {
    status: "",
    message: ""
  };
  rememberMe: boolean;

  constructor(public top_menu: TopMenuComponent, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  signIn() {

    this.notif = { status: "", message: "" };
    if (this.loginForm.uniqueId == ""){
      this.notif.message = "Please enter username/email.";
      this.notif.status = "wrong";
      return;
    }
    if (this.loginForm.password == ""){
      this.notif.message = "Please enter password.";
      this.notif.status = "wrong";
      return;
    }

    this.auth.signIn(this.loginForm);

  }

  socialSignIn(socialPlatform : string) {

    this.notif = { status: "", message: "" };
    this.auth.socialSignIn(socialPlatform);
    
  }

  switchToLogin() {
    this.top_menu.register_form_hidden = false;
    this.top_menu.login_form_hidden = true;
  }

  close() {
    this.top_menu.login_form_hidden = true;

    this.loginForm = {
      uniqueId: "",
      password: ""
    };

    this.notif = {
      status: "",
      message: ""
    };
  }
}
