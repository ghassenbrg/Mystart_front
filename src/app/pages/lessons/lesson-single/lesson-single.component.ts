import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsComponent } from '../lessons.component';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-lesson-single',
  templateUrl: './lesson-single.component.html',
  styleUrls: ['./lesson-single.component.css']
})
export class LessonSingleComponent implements OnInit {

  nbr: any;
  lesson: any;
  constructor(private route: ActivatedRoute, private parent: LessonsComponent, private restApi: RestApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nbr= params.get('nbr');
      this.parent.nbr = this.nbr;
      this.restApi.get('course/'+this.parent.id+'/lesson/'+this.nbr).subscribe((data: {}) => {
        this.lesson = data;
      });
    });
  }

  alert(){
    window.alert(JSON.stringify(this.lesson));
  }
}
