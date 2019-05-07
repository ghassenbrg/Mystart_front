import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flat-services',
  templateUrl: './flat-services.component.html',
  styleUrls: ['./flat-services.component.css']
})
export class FlatServicesComponent implements OnInit {

  @Input() actorsData;

  constructor() { }

  ngOnInit() {
  }

}
