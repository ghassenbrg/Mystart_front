import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-blog-featured',
  templateUrl: './blog-featured.component.html',
  styleUrls: ['./blog-featured.component.css']
})
export class BlogFeaturedComponent implements OnInit {

  posts: any;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {

    return this.restApi.get('articles/1/3').subscribe((data: {}) => {
      this.posts = data;
      for (let post of this.posts) {
        post.content = post.content.substring(0,85).replace(/<[^>]*>/g, '');
      }
    });

  }

}
