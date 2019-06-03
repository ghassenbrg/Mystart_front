import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dash-layout',
  templateUrl: './user-dash-layout.component.html',
  styleUrls: ['./user-dash-layout.component.css']
})
export class UserDashLayoutComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  gotToHomepage() {
    window.open( "/" );
  }
  logOut() {
    this.auth.logOut();
    window.location.href = '/';
  }
}
