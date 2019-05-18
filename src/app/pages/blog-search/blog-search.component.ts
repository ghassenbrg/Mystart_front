import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.css']
})
export class BlogSearchComponent implements OnInit {

  bounceIn: any;
    
  categories: any;
  category: string;
  keywords: string;
  
  posts : any;

  pagination = {
    cuurentPage: 1,
    pageSize: 6
  }

  loading = false;

  constructor(private title: Title, private route: ActivatedRoute, public restApi: RestApiService) {
    this.title.setTitle('Mystart | Blog search');
   }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.category= params.get('cat');
      this.keywords= params.get('keyword');
      
    });

  }

}
