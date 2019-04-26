import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.css']
})
export class ProjectSingleComponent implements OnInit {

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
