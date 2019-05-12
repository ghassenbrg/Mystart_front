import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounceIn))])
  ]
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

  location = {
    TN: ['Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kebili',
     'Kef', 'Mahdia', 'Manouba', 'Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine',
     'Tozeur', 'Tunis', 'Zaghouan']
  }

  constructor(public restApi: RestApiService, private time: TimeService) { }

  ngOnInit() {
    
    this.filter['keywords'] = '';
    this.filter['price'] = 'All';
    this.filter['city'] = null;
    this.filter['time'] ="Any time";
    this.sortBy['criteria'] = 'Date';
    this.sortBy['direction'] = 'Asc';

    this.restApi.get('events/0/'+this.pagination.pageSize+'/1').subscribe((data: {}) => {
      this.events = data;
      for(var i=0; i < this.events.length; i++) {
        this.startTime[i] = new Date(data[i].startTime);
      }
    });
    
    this.restApi.get('events/count').subscribe((data: {}) => {
      this.pagination['itemSize'] = data['nbr'];
    });
  }


  loadNewData() {
    let keywords = this.filter['keywords'] ;
    let location;

    if(!this.filter['city']) 
      location = 'all';
    else
      location = this.filter['city']+', TN';

    if(keywords.length == 0) keywords = '_0_'; 
    
    let sortBy = this.sortBy['criteria']+'_'+this.sortBy['direction'];

    this.loading = true;
    let tab :any;
    let skip = this.pagination.cuurentPage * this.pagination.pageSize;
    let limit = this.pagination.pageSize;
    
    this.restApi.get('events/'+skip+'/'+limit+'/1/'+location+'/'+this.filter['price']+'/'+this.filter['time']+'/'+sortBy+'/'+keywords).subscribe((data: {}) => {
      tab = data;
      for (let d of tab){
       this.events.push(d);
      }
      for(var i=0; i < tab.length; i++) {
        this.startTime.push(new Date(data[i].startTime)) ;
       }
      this.pagination.cuurentPage++;
      this.loading = false;
    });
 }

 filterResult() {
  let keywords = this.filter['keywords'] ;
  let location ;

   if(!this.filter['city']) 
    location = 'all';
  else
    location = this.filter['city']+', TN';

  if(keywords.length == 0) keywords = '_0_'; 
  
  let sortBy = this.sortBy['criteria']+'_'+this.sortBy['direction'];

  this.loading = true;
  
  this.restApi.get('events/0/'+this.pagination.pageSize+'/1/'+location+'/'+this.filter['price']+'/'+this.filter['time']+'/'+sortBy+'/'+keywords).subscribe((data: {}) => {
    this.events = data;
    for(var i=0; i < this.events.length; i++) {
      this.startTime[i] = new Date(data[i].startTime);
    }
    this.loading = false;
  });
  this.restApi.get('events/0/'+this.pagination.pageSize+'/1/'+location+'/'+this.filter['price']+'/'+this.filter['time']+'/'+sortBy+'/'+keywords+'/count').subscribe((data: {}) => {
    let nbr = 0;
    if(data) nbr = data['nbr'];
    this.pagination['itemSize'] = nbr;
    console.log('size: '+this.pagination['itemSize']+' | page: '+this.pagination.cuurentPage);
  });

 }

 isClear(){
  if ((this.filter['keywords'] == '') && (this.filter['price'] == 'All') && (!this.filter['city']) && (this.filter['time'] == "Any time")) {
    return true;
  }
  return false;
}

clearFilter(){
  this.filter['keywords'] = '';
  this.filter['price'] = 'All';
  this.filter['city'] = null;
  this.filter['time'] ="Any time";
 this.filterResult();
}

}
