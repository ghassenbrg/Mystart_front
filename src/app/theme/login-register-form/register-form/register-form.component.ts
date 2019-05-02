import { Component, OnInit, Input } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Input() isHidden;

  constructor(public top_menu: TopMenuComponent, private socialAuthService: AuthService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  socialSignUp(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);

        // this.cookieService.set( 'isLogged', 'true' );
        // window.location.reload();
            
      }
    );
  }

  close() {
    this.top_menu.register_form_hidden = true;
  }
    

}
