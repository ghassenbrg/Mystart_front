import { Component, OnInit, Input } from '@angular/core';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-flat-counter',
  templateUrl: './flat-counter.component.html',
  styleUrls: ['./flat-counter.component.css']
})
export class FlatCounterComponent implements OnInit {

  @Input() successStoryNbr:any;

  constructor(public home: HomeComponent) {}

  ngOnInit() {
  }
}
