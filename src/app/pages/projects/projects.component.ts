import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  isActive = 2;
  params = {
    title: "Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "Projects"
  }

  projects = [
    {
      title: "Complete Python Bootcamp",
      description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      author: "Ghassen Bargougui",
      coverImg: "../../../assets/images/courses/courses-gird-v1-1.png"
    },
    {
      title: "Complete Python Bootcamp",
      description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      author: "Elwaer Youcef",
      coverImg: "../../../assets/images/courses/courses-gird-v1-2.png"
    },
    {
      title: "Complete Python Bootcamp",
      description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      author: "Timoumi Khlalil",
      coverImg: "../../../assets/images/courses/courses-gird-v1-3.png"
    },
    {
      title: "Complete Python Bootcamp",
      description: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
      author: "Hasni Iheb",
      coverImg: "../../../assets/images/courses/courses-gird-v1-4.png"
    }
  ];

  constructor( private title: Title) {
    this.title.setTitle("Mystart | Projects")
   }

  ngOnInit() {
  }

}
