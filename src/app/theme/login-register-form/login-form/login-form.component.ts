import { Component, OnInit, Input } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() isHidden;

  constructor(public top_menu: TopMenuComponent) { }

  ngOnInit() {
  }

  close() {
    this.top_menu.login_form_hidden = true;
  }
}
