import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  course = {
    lessons: [
      {titre: 'test 1', nbr: 1},
      {titre: 'test 2', nbr: 2},
      {titre: 'test 3', nbr: 3},
      {titre: 'test 4', nbr: 4},
      {titre: 'test 5', nbr: 5}
    ]
  };
  id: any;

  constructor(public router: Router,  private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.id= params.get('id');

    });

  }

}
