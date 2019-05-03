import { Component, OnInit, Input } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { CookieService } from 'ngx-cookie-service';
import { RestApiService } from 'src/app/core/rest-api.service';

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

  constructor(public top_menu: TopMenuComponent, private socialAuthService: AuthService, private cookieService: CookieService, public restApi: RestApiService) { }

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

    this.restApi.post('login', this.loginForm).subscribe((data: {}) => {
      console.log(data);
    });

  }

  socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        let body: {};
        if(socialPlatform == "facebook"){
          body = {facebookId: userData.id};
        } else if(socialPlatform == "google"){
          body = {googleId: userData.id};
        }

        this.restApi.post('socialLogin', body).subscribe((data: {}) => {
          console.log(data);
        });

        // this.cookieService.set( 'isLogged', 'true' );
        // window.location.reload();
            
      }
    );
  }

  switchToLogin() {
    this.top_menu.register_form_hidden = false;
    this.top_menu.login_form_hidden = true;
  }

  close() {
    this.top_menu.login_form_hidden = true;
  }
}
