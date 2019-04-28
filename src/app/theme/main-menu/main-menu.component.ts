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
    
    this.amIActive[this.isActive] = "active";
  }

}
