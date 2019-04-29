import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  events: any;
  startTime = [];

  constructor(public restApi: RestApiService, private time: TimeService) { }

  ngOnInit() {

    return this.restApi.get('events/3').subscribe((data: {}) => {
      this.events = data;
      for(var i=0; i <3; i++) {
        this.startTime[i] = new Date(data[i].startTime);
      }
    });
  }
  
}
