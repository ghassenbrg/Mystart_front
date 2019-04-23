import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  isActive = 3;
  params = {
    title: "Experts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
  }

  constructor() { }

  ngOnInit() {
  }

}
