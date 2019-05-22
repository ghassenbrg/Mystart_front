import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounceIn))])
  ]
})
export class CoursesComponent implements OnInit {

  params = {
    title: "Courses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "Courses"
   }

   pagination = {
    cuurentPage: 1,
    pageSize: 2,
    btn: []
  }

   courses: any;
   coursesNbr = 0;

   categories: any;
   category = 'all';
   keywords: string;
   price: String = 'All';
   sortBy: String = 'release date';
   sortDir = 'Desc';

  constructor( private title: Title, private route: ActivatedRoute, public restApi: RestApiService, private time: TimeService) {
    this.title.setTitle("Mystart | Courses")
   }
  ngOnInit() {
    this.restApi.get('categories').subscribe((data: {}) => {
      this.categories = data;
    });
    this.restApi.get('courses/0/'+this.pagination.pageSize+'/1/'+this.category+'/all/Date_Desc/_0_/count').subscribe((data: {}) => {
      this.coursesNbr = 0;
      this.pagination.btn = [];
      if (data) {
        this.coursesNbr = data['nbr'];
        let nbr = this.coursesNbr / this.pagination.pageSize;
        if (nbr != Math.floor(nbr)) nbr = Math.floor(nbr) + 1 ;
        this.pagination.btn = Array(nbr).fill(0);
      }
    });
    this.restApi.get('courses/0/'+this.pagination.pageSize+'/1/'+this.category+'/all/Date_Desc/_0_').subscribe((data: {}) => {
      this.courses = data;
      let rateSum: any;
      for (let course of this.courses) {
        rateSum = 0;
        if (course.price == 0) course.price = 'Free';
        else course.price = course.price + ' TND';
        course.createdAt = new Date(course.createdAt);
        course.overview = course.overview.substring(0,130) + '...';
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
    this.filterResult();
  }

  filterResult(s?) {
    let skip = 0;
    if (s) skip = s;
    else this.pagination.cuurentPage = 1;

    let keywords = this.keywords;
    if (!keywords) keywords = '_0_';

    let sortBy: String;
    if (this.sortBy == 'release date') sortBy = 'Date_'+this.sortDir;
    else sortBy = 'Price_'+this.sortDir;

    this.restApi.get('courses/'+skip+'/'+this.pagination.pageSize+'/1/'+this.category+'/'+this.price+'/'+sortBy+'/'+keywords+'/count').subscribe((data: {}) => {
      this.coursesNbr = 0;
      this.pagination.btn = [];
      if (data) {
        this.coursesNbr = data['nbr'];
        let nbr = this.coursesNbr / this.pagination.pageSize;
        if (nbr != Math.floor(nbr)) nbr = Math.floor(nbr) + 1 ;
        this.pagination.btn = Array(nbr).fill(0);
      }
    });
    this.restApi.get('courses/'+skip+'/'+this.pagination.pageSize+'/1/'+this.category+'/'+this.price+'/'+sortBy+'/'+keywords).subscribe((data: {}) => {
      this.courses = data;
      let rateSum: any;
      for (let course of this.courses) {
        rateSum = 0;
        if (course.price == 0) course.price = 'Free';
        else course.price = course.price + ' TND';
        course.createdAt = new Date(course.createdAt);
        course.overview = course.overview.substring(0,130) + '...';
        for (let review of course.reviews) {
          rateSum += parseInt(review.rate);
        }
        course.rate = new Number(rateSum / course.reviews.length);
        course.rate = parseFloat(course.rate.toFixed(1));
      }
    });
  }

  loadPage(i) {
    if (this.pagination.cuurentPage == i+1) return;
    let skip = i * this.pagination.pageSize;
    this.pagination.cuurentPage = i+1;
    this.filterResult(skip);
  }

  isActive(cat) {
    if (this.category == cat) return 'activeCat';
    return '';
  }

  isClear() {
    if ((!this.keywords) && (this.price == 'All')) return true;
    return false;
  }

  clearFilter() {
    // this.category = 'all';
    this.keywords = null;
    this.price = 'All';
    this.filterResult()
  }

  pageActive(i) {
    if (i+1 == this.pagination.cuurentPage) return 'active';
  }

}
