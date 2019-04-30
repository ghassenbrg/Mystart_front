import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';
import { Title } from '@angular/platform-browser';
import { TimeService } from 'src/app/core/time.service';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {

  id:any;
  post = {};
  date: Date;
  params = {
    title: "",
    description: "",
    path: "Articles"
  }

  constructor(private title: Title, private route: ActivatedRoute, public restApi: RestApiService, private time: TimeService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id= params.get('id');
      return this.restApi.get('article/'+this.id).subscribe((data: {}) => {
        this.post = data[0];
        this.params.title = this.post['title'];
        this.title.setTitle("Mystart | "+this.post['title']);
        this.date = new Date(this.post['creationDate']);
      });
    });

  }

}
