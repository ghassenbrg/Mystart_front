import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  events: any;
  startTime = [];

  constructor(public restApi: RestApiService, private time: TimeService) { }

  ngOnInit() {
    this.restApi.get('events').subscribe((data: {}) => {
      this.events = data;
      // var i = 0;
      for(var i=0; i <3; i++) {
        this.startTime[i] = new Date(data[i].startTime);
      }
    });
  }

}
