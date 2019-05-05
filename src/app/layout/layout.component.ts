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
  
  constructor(public router: Router, private restApi: RestApiService, private facebookService: FacebookService) { }

  ngOnInit() {

    //check logged
    let token = localStorage.getItem('token');
    if(token){
      this.restApi.get('me').subscribe((data: {}) => {
        if(data['err']) {
          this.loggedUser = undefined;
          localStorage.removeItem('token');
        }
        this.loggedUser = data;      
      });
    }else {
      this.loggedUser = undefined;
      localStorage.removeItem('token');
    }

    //facebook customer chat
    this.initFacebookService();
  
  }

  // facebook init
private initFacebookService(): void {
  const initParams: InitParams = { xfbml: true, version: 'v3.2' };
  this.facebookService.init(initParams);
}

}
