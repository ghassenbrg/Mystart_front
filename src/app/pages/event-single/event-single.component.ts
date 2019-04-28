import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';

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

  constructor( private title: Title, private route: ActivatedRoute, public restApi: RestApiService) {
   }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id= params.get('id');
      return this.restApi.get('event/'+this.id).subscribe((data: {}) => {
        this.event = data;
        this.params.title = data['title'];
        this.title.setTitle("Mystart | "+data['title']);
      });
    });

  }

}
