import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flat-video',
  templateUrl: './flat-video.component.html',
  styleUrls: ['./flat-video.component.css']
})
export class FlatVideoComponent implements OnInit {

  @Input() flatVideo;
  constructor() { }

  ngOnInit() {
  }

}
