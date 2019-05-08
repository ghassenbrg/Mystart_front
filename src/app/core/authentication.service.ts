import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private socialAuthService: AuthService, private restApi: RestApiService) { }

  signIn(loginForm) {

    this.restApi.post('login', loginForm).subscribe((data: {}) => {
      console.log(data);
      localStorage.setItem('auth',JSON.stringify(data));
      window.location.reload();
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
          localStorage.setItem('auth',JSON.stringify(data));
          window.location.reload();
          
        });
            
      }
    );
  }

  logOut() {
    localStorage.removeItem('auth');
    this.socialAuthService.signOut();
    window.location.reload();
  }


}
