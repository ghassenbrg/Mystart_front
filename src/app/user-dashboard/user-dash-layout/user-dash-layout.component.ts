import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-user-dash-layout',
  templateUrl: './user-dash-layout.component.html',
  styleUrls: ['./user-dash-layout.component.css']
})
export class UserDashLayoutComponent implements OnInit {

  loggedUser: any;

  constructor(private auth: AuthenticationService, private restApi: RestApiService) { }

  ngOnInit() {
        //check logged
        let auth = JSON.parse(localStorage.getItem('auth'));

        if((auth)&&(auth.token)){
          this.restApi.get('me').subscribe((data: {}) => {
            if(data['err']) {
              this.loggedUser = undefined;
              localStorage.removeItem('auth');
            }
            this.loggedUser = data;      
          });
        }else {
          this.loggedUser = undefined;
          localStorage.removeItem('auth');
        }
  }

  gotToHomepage() {
    window.open( "/" );
  }
  logOut() {
    this.auth.logOut();
    window.location.href = '/';
  }
  externelPorfilPicUrl(porfilpic) {
    if((porfilpic.search('http://') == -1) && ((porfilpic.search('https://') == -1))) {
      return false;
    }
    return true;
  }
}
