import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  @Input() params;

  constructor() {}

  ngOnInit() {
  }

}
