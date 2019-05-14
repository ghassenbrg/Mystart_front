import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: any;
  dates = [];

  array = ['Test1 lorem ipsum dolor set amet.', 'test2', 'Test1 lorem ipsum dolor set amet.', 'test2', 'Test1 lorem ipsum dolor set amet.', 'test2'];
  categories: any;
  
  constructor(private title: Title, private route: ActivatedRoute, public restApi: RestApiService, private time: TimeService) {
    this.title.setTitle("Mystart | Blog")
   }

  ngOnInit() {

    this.restApi.get('categories').subscribe((data: {}) => {
      this.categories = data;
    });

    return this.restApi.get('articles').subscribe((data: {}) => {
      this.posts = data;
      let i = 0;
      for (let post of this.posts){
        post.content = post.content.substring(0,170).replace(/<[^>]*>/g, '')+"...";
        this.dates[i] = new Date(post.creationDate);
        i++;
      }
    });
  }

  
  isCatActive() {
    return '';
  }

}
