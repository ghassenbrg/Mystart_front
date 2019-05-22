import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';

@Component({
  selector: 'app-course-single',
  templateUrl: './course-single.component.html',
  styleUrls: ['./course-single.component.css']
})
export class CourseSingleComponent implements OnInit {

  params = {
    title: "",
    description: "",
    path: "Courses"
  }

  review = {
    rate: 4,
    feedback: ''
  }
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  id: string;
  course: any;
  
  constructor(private title: Title, private route: ActivatedRoute, public restApi: RestApiService, private time: TimeService) { }

  ngOnInit() {

    this.title.setTitle('Course | ');

    this.route.paramMap.subscribe(params => {

      this.id= params.get('id');

      this.restApi.get('course/'+this.id).subscribe((data: {}) => {
        this.course = data[0];
        this.params.title = this.course.title;
        this.title.setTitle('Course | '+this.params.title);
        let rateSum: any;
          rateSum = 0;
          if (this.course.price == 0) this.course.price = 'Free';
          else this.course.price = this.course.price + ' TND';
          this.course.createdAt = new Date(this.course.createdAt);
          for (let review of this.course.reviews) {
            rateSum += parseInt(review.rate);
          }
          this.course.rate = new Number(rateSum / this.course.reviews.length);
          this.course.rate = parseFloat(this.course.rate.toFixed(1));
      });
    });

  }

}
