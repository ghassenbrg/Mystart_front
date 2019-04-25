import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.css']
})
export class EventSingleComponent implements OnInit {

  isActive = 6;

  id: any;

  params = {
    title: "My Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "Events"
  }


  constructor( private title: Title, private route: ActivatedRoute) {
    this.title.setTitle("Mystart | My Title");
   }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id= params.get('id');
    });

  }

}
