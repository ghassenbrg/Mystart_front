import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
        //facebook customer chat
        this.initFacebookService();
  
  }

    // facebook init
private initFacebookService(): void {
  const initParams: InitParams = {
    appId: '372814659999579',
    xfbml: true,
    version: 'v3.3'
  };
  this.facebookService.init(initParams);
}

}
