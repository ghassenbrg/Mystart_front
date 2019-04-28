import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  params = {
    title: "Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "Projects"
  }
  projects = {};

  constructor( private title: Title, public restApi: RestApiService) {
    this.title.setTitle("Mystart | Projects")
   }

  ngOnInit() {
    this.restApi.get('projects').subscribe((data: {}) => {
      this.projects = data;
    });
  }

}
