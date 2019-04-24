import { Component, OnInit, Input } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Input() isHidden;

  constructor(public top_menu: TopMenuComponent) { }

  ngOnInit() {
  }

  close() {
    this.top_menu.register_form_hidden = true;
  }

}
