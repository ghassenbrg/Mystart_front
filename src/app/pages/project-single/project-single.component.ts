import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.css']
})
export class ProjectSingleComponent implements OnInit {

  id: any;

  params = {
    title: "",
    description: "",
    path: "Events"
  }

  project: any;

  constructor( private title: Title, private route: ActivatedRoute, public restApi: RestApiService) {
   }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id= params.get('id');
      return this.restApi.get('project/'+this.id).subscribe((data: {}) => {
        this.project = data;
        this.params.title = data['title'];
        this.title.setTitle("Mystart | "+data['title']);
      });
    });

  }

}
