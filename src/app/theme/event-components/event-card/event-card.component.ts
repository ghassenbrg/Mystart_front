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

  pagination = {
    cuurentPage: 1,
    pageSize: 4
  }
  loading = false;

  categories;
  filter = {};
  sortBy = {};

  country: String;
  location = {
    TN: ['Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kebili',
     'Kef', 'Mahdia', 'Manouba', 'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine',
     'Tozeur', 'Tunis', 'Zaghouan']
  }

  constructor(public restApi: RestApiService, private time: TimeService) { }

  ngOnInit() {
    
    this.filter['keywords'] = '';
    this.filter['price'] = 'All';
    this.filter['country'] = null;
    this.filter['time'] ="Any time";
    this.sortBy['direction'] = '1'; // 1 for Asc & -1 for Desc

    this.restApi.get('events').subscribe((data: {}) => {
      this.events = data;
      // var i = 0;
      for(var i=0; i <3; i++) {
        this.startTime[i] = new Date(data[i].startTime);
      }
    });
  }

}
