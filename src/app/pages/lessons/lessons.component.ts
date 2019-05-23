import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  params = {
    title: "",
    description: "",
    path: "Courses/lesson"
  }

  lessons: any;

  id: any;
  nbr: any;

  constructor(public router: Router,  private route: ActivatedRoute, private restApi: RestApiService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id= params.get('id');

      this.restApi.get('course/'+this.id+'/lessons').subscribe((data: {}) => {
        this.lessons = data;
      });
    });

  }

  isActive(nbr) {
    if (this.nbr == nbr) return 'active-route';
    return '';
  }

}
