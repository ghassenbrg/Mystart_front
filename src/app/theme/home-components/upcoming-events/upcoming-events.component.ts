import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  events: any;
  date: Date;
  test: any;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {

    return this.restApi.get('events/3').subscribe((data: {}) => {
      this.events = data;
      this.date = new Date(data[0].startTime);
      console.log("test : "+this.getMonth(this.date));

    });
  }

  getHours(date: Date) {
    if (date.getHours() < 10){
      return "0"+date.getHours();
    }
    return date.getHours();
  }

  getMinutes(date: Date) {
    if (date.getMinutes() < 10){
      return "0"+date.getMinutes();
    }
    return date.getMinutes();
  }

  getMonth(date: Date) {
    switch (date.getMonth()) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "Not Found.";
    }
  }
  
}
