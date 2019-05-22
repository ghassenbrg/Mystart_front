import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsComponent } from '../lessons.component';

@Component({
  selector: 'app-lesson-single',
  templateUrl: './lesson-single.component.html',
  styleUrls: ['./lesson-single.component.css']
})
export class LessonSingleComponent implements OnInit {

  nbr: any;
  lesson: {};
  constructor(private route: ActivatedRoute, private parent: LessonsComponent) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nbr= params.get('nbr');
      this.parent.nbr = this.nbr;
    });
  }

}
