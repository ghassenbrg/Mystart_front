import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../core/rest-api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isActive = 0;
  loggedUser: any;
  
  constructor(public router: Router, private restApi: RestApiService) { }

  ngOnInit() {

    this.whoIsActive();

    let token = localStorage.getItem('token');
    if(token){
      this.restApi.get('me').subscribe((data: {}) => {
        if(data['err']) this.loggedUser = undefined;
        this.loggedUser = data;      
      });
    }else {
      this.loggedUser = undefined;
    }
  
  }

  whoIsActive() {

    switch(this.router.url) {
      case "/":
        this.isActive = 1;
        break;
      case "/projects":
      this.isActive = 2;
        break;
      case "/experts":
      this.isActive = 3;
        break;
        case "/courses":
        this.isActive = 4;
          break;
        case "/events":
        this.isActive = 5;
          break;
        case "/blog":
        this.isActive = 6;
          break;
      default:
        this.isActive = 0;
    }

  }
}
