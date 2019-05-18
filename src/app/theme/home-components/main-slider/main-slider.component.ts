import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  @Input() slider;
  
  constructor() { }

  ngOnInit() {
  }
  active(i) {
    if (i == 0)
      return 'active';
    return '';
  }
}
