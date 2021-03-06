import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.css']
})
export class EventSingleComponent implements OnInit {

  id: any;

  params = {
    title: "",
    description: "",
    path: "Events"
  }

  event = {};
  startTime: any;
  endTime: any;
  diffTime: {};

  constructor( private title: Title, private route: ActivatedRoute, public restApi: RestApiService, private time: TimeService) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      let currentTime: any;
      this.id= params.get('id');
      return this.restApi.get('event/'+this.id).subscribe((data: {}) => {
        this.event = data;
        this.startTime = new Date(data['startTime']);
        this.endTime = new Date(data['endTime']);
        currentTime = new Date();
        this.diffTime = this.time.numberToDate(this.startTime - currentTime);
        this.params.title = data['title'];
        this.title.setTitle("Mystart | "+data['title']);
      });
    });

  }

}
