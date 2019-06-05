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

  courses: any;

  constructor( private restApi: RestApiService, private parent: UserDashLayoutComponent, private notification: NzNotificationService) { }

  ngOnInit() {
    this.restApi.get('user/'+this.parent.loggedUser._id+'/courses').subscribe((data: {}) => {
      this.courses = data;
      this.notification.create(
        'success',
        'Authorized list was updated',
        JSON.stringify(this.courses[0].title)
      );
    });
  }

  loadData() {

  }

}
