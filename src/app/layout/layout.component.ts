import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../core/rest-api.service';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  loggedUser: any;
  topMenuData: {};
  footerData: {};

  constructor(public router: Router, private restApi: RestApiService, private facebookService: FacebookService) { }

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
    console.log("******************");
    this.restApi.get('config/menus').subscribe((data: {}) => {
      if(data['err']) {
        this.topMenuData = undefined;
        this.footerData = undefined;
      }
      console.log("******************");
      console.log("test"+data);
      this.topMenuData = {
        logo: data['logo'],
        domainName: data['domainName'],
      };   
      this.footerData = {
        logo: data['logoFooter'],
        domainName: data['domainName'],
        socialMedia: data['socialMedia'],
        playStore: data['playStore'],
        appStore: data['appStore']
      };      
    });

    //facebook customer chat
    this.initFacebookService();
  
  }

  // facebook init
private initFacebookService(): void {
  const initParams: InitParams = { xfbml: true, version: 'v3.2' };
  this.facebookService.init(initParams);
}

}
