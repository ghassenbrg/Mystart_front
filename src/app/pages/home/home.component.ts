import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  successStoryNbr: any;
  actorsData = {
    entrepreneur: {},
    investor: {},
    expert: {}
  };
  slider: {};

  constructor(private restApi: RestApiService) { }

  ngOnInit() {

    
    this.restApi.get('config').subscribe((data: {}) => {
      if(data['err']) return false;
      // for flat counter
      this.successStoryNbr = data['successStoryNbr'];
      // for actors description
      this.actorsData.entrepreneur = data['entrepreneur'];
      this.actorsData.investor = data['investor'];
      this.actorsData.expert = data['expert'];
      //for slider
      this.slider = data['slider'];

    });

  }

}
