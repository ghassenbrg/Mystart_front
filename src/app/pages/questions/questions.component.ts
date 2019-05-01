import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  params = {
    title: "Questions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "Questions"
  }

  experts = ['', '', '', '', '', ''];
  
  constructor( private title: Title) {
    this.title.setTitle("Mystart | Questions")
   }

  ngOnInit() {
  }

}
