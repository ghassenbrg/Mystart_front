import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @Input() isActive;
   amIActive= [];
   
  constructor(public router: Router) { }

  ngOnInit() {
    this.whoIsActive();
  }

  whoIsActive() {

    let isActive: Number;
    switch(this.router.url) {
      case "/":
        isActive = 1;
        break;
      case "/projects":
        isActive = 2;
        break;
      case "/experts":
        isActive = 3;
        break;
        case "/courses":
          isActive = 4;
          break;
        case "/events":
          isActive = 5;
          break;
        case "/blog":
          isActive = 6;
          break;
      default:
          isActive = 0;
    }

    for (let i=1; i < 7; i++){
      if (i == isActive) {
        this.amIActive[i] = "active";
        continue;
      }
      this.amIActive[i] = "";
    }

  }

}
