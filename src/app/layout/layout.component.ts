import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isActive = 0;
  loggedUser: {};
  
  constructor(public router: Router) { }

  ngOnInit() {

    this.whoIsActive();
    if(localStorage.getItem('token')){
      this.loggedUser = {test: "Hello"}
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
