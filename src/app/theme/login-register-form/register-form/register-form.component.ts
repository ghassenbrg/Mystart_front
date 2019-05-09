import { Component, OnInit, Input } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Input() isHidden;
  notif = {
    status: "",
    message: ""
  };
  userForm = new User({});

  constructor(public top_menu: TopMenuComponent, private socialAuthService: AuthService, private cookieService: CookieService, public restApi: RestApiService) { }

  ngOnInit() {
  }

  signUp() {
    this.notif = { status: "", message: "" };

    let verifUsername = this.userForm.validateUsername();
    if (!verifUsername['verif']){
      this.notif.message = verifUsername['message'];
      this.notif.status = "wrong";
      return;
    }
    if (!this.userForm.validateMail()){
      this.notif.message = "Enter a valid mail.";
      this.notif.status = "wrong";
      return;
    }
    if (this.userForm.password.length < 8){
      this.notif.message = "Password must be at least 8 characters.";
      this.notif.status = "wrong";
      return;
    }

    this.restApi.post('users', this.userForm).subscribe((data: {}) => {
      console.log(data);
      this.notif.message = data['message'];
      if (!data['error']){
        this.notif.status = 'success';
        setTimeout(() => {
          this.switchToLogin()
        }, 2000);
      } else {
        this.notif.status = 'wrong';
      }
    });

  }

  socialSignUp(socialPlatform : string) {
    this.notif = { status: "", message: "" };

    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);

        let user: User;
        let facebookId= "";
        let googleId= "";

        if(socialPlatform == "facebook"){
          userData['image'] = userData['image'].replace('normal','large');
          facebookId= userData['id'];
        } else {
          googleId= userData['id'];
        }
        
        user = new User({
          email: userData['email'], 
          fullName: userData['name'], 
          profilpic: userData['image'], 
          facebookId: facebookId, 
          googleId: googleId
        });

        user.password = user.generatePassword(12);

        this.restApi.post('users', user).subscribe((data: {}) => {
          console.log(data);
          this.notif.message = data['message'];
          if (!data['error']){
            this.notif.status = 'success';
          } else {
            this.notif.status = 'wrong';
          }
        });
        // this.cookieService.set( 'isLogged', 'true' );
        // window.location.reload();
            
      }
    );
  }

  switchToLogin() {
    this.top_menu.register_form_hidden = true;
    this.top_menu.login_form_hidden = false;
  }

  close() {
    this.top_menu.register_form_hidden = true;
    this.userForm = new User({});
    this.notif = {
      status: "",
      message: ""
    };
  }
  
}
