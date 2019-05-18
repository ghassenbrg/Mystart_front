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

    let time ="Upcomming";
    let sortBy = "Date_Asc";

    this.restApi.get('events/0/3/1/all/all/'+time+'/'+sortBy+'/_0_/count').subscribe((data: {}) => {
      let nbr = 0;
      if(data) nbr = data['nbr'];
  //    if (nbr < 3) {
  //      time ="Any Time";
  //      sortBy = "Date_Desc";
  //    }
      this.restApi.get('events/0/3/1/all/all/'+time+'/'+sortBy+'/_0_').subscribe((data: {}) => {
        console.log(JSON.stringify(data));
        this.events = data;
        for(var i=0; i <3; i++) {
          this.startTime[i] = new Date(data[i].startTime);
        }
      });
    });
    
  }
  
}
