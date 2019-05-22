import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-single',
  templateUrl: './lesson-single.component.html',
  styleUrls: ['./lesson-single.component.css']
})
export class LessonSingleComponent implements OnInit {

  nbr: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      this.nbr= params.get('nbr');

    });
  }

}
