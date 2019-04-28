import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {



  constructor(public restApi: RestApiService) { }

  ngOnInit() {
  }

}
