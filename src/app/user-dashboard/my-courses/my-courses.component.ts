import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { UserDashLayoutComponent } from '../user-dash-layout/user-dash-layout.component';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  courses: any = [];
  enrolmentsList: any = [];

  constructor( private restApi: RestApiService, private parent: UserDashLayoutComponent, private notification: NzNotificationService) { }

  ngOnInit() {
    this.restApi.get('user/'+this.parent.loggedUser._id+'/courses').subscribe((data: {}) => {
      this.courses = data['courses'];
      this.enrolmentsList = data['enrolmentsList'];
    });
  }

  view(id) {
    window.open('/course/'+id);
  }

  loadData() {
    this.restApi.get('user/'+this.parent.loggedUser._id+'/courses').subscribe((data: {}) => {
      this.courses = data['courses'];
      this.enrolmentsList = data['enrolmentsList'];
    });
  }

}
