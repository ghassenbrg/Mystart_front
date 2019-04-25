import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event-single',
  templateUrl: './event-single.component.html',
  styleUrls: ['./event-single.component.css']
})
export class EventSingleComponent implements OnInit {

  isActive = 6;

  params = {
    title: "My Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "projects/"
  }
  
  constructor( private title: Title) {
    this.title.setTitle("Mystart | My Title");
   }

  ngOnInit() {
  }

}
