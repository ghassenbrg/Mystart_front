import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-reviews',
  templateUrl: './users-reviews.component.html',
  styleUrls: ['./users-reviews.component.css']
})
export class UsersReviewsComponent implements OnInit {

  @Input() feedback;
  
  constructor() { }

  ngOnInit() {
  }

}
