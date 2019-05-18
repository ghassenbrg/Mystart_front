import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.id= params.get('id');
      
    });

  }

}
