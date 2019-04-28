import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  events = {};

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.restApi.get('events').subscribe((data: {}) => {
      this.events = data;
    });
  }

}
