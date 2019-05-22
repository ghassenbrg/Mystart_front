import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  categories: any;
  keywords: String;

  constructor(private title: Title, private route: ActivatedRoute, private router: Router, public restApi: RestApiService, private time: TimeService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id= params.get('id');
      
      return this.restApi.get('article/'+this.id).subscribe((data: {}) => {
        this.post = data[0];
        this.params.title = this.post['title'];
        this.title.setTitle("Article | "+this.post['title']);
        this.date = new Date(this.post['creationDate']);
      },(err) => {
        return this.router.navigate(['/404']);
      });
      
    });

    this.restApi.get('categories').subscribe((data: {}) => {
      this.categories = data;
    });
    
  }

  searchClick(){
    if (!this.keywords) return;
    this.router.navigate(['/blog/all/'+this.keywords]);
  }
}
