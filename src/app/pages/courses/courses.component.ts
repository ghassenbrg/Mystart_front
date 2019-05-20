import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  params = {
    title: "Courses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "Courses"
   }

   courses: any;
   coursesNbr = 0;

   categories: any;
   category = 'all';
   keywords: string;
   sortBy: String = 'release date';

  constructor( private title: Title, private route: ActivatedRoute, public restApi: RestApiService, private time: TimeService) {
    this.title.setTitle("Mystart | Courses")
   }
  ngOnInit() {
    this.restApi.get('categories').subscribe((data: {}) => {
      this.categories = data;
    });
    this.restApi.get('courses/count').subscribe((data: {}) => {
      this.coursesNbr = data['nbr'];
    });
    this.restApi.get('courses').subscribe((data: {}) => {
      this.courses = data;
      let rateSum: any;
      for (let course of this.courses) {
        rateSum = 0;
        if (course.price == 0) course.price = 'Free';
        else course.price = course.price + ' TND';
        course.createdAt = new Date(course.createdAt);
        course.description = course.description.substring(0,130) + '...';
        for (let review of course.reviews) {
          rateSum += parseInt(review.rate);
        }
        course.rate = new Number(rateSum / course.reviews.length);
        course.rate = parseFloat(course.rate.toFixed(1));
      }
    });

  }

  filterByCat(cat) {
    if (this.category == cat) return;
    this.category = cat;
  }

  isActive(cat) {
    if (this.category == cat) return 'activeCat';
    return '';
  }

}
