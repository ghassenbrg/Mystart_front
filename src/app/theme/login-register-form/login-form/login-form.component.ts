import { Component, OnInit, Input } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() isHidden;

  constructor(public top_menu: TopMenuComponent, private socialAuthService: AuthService, private cookieService: CookieService) { }

  ngOnInit() {
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
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
        this.cookieService.set( 'isLogged', 'true' );
        window.location.reload();
            
      }
    );
  }

  close() {
    this.top_menu.login_form_hidden = true;
  }
}
