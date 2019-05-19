import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.component.html',
  styleUrls: ['./blog-search.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounceIn))])
  ]
})
export class BlogSearchComponent implements OnInit {

  bounceIn: any;
    
  categories: any;
  category = 'all';
  keywords: string;

  posts : any;

  pagination = {
    cuurentPage: 1,
    pageSize: 6
  }

  loading = false;
  
  constructor(private title: Title, private route: ActivatedRoute, public restApi: RestApiService) {
    this.title.setTitle("Mystart | Blog")
   }

  ngOnInit() {

    this.restApi.get('categories').subscribe((data: {}) => {
      this.categories = data;
    });

    this.route.paramMap.subscribe(params => {
      this.category = params.get('cat');
      let k = params.get('keyword');
      if (k != '_0_') this.keywords = k;
     
      this.restApi.get('articles/0/6/1/'+this.category+'/Date_Desc/'+k+'/count').subscribe((data: {}) => { 
        let nbr = 0;
        if(data) nbr = data['nbr'];
        this.pagination['itemSize'] = nbr;
      });
  
      this.restApi.get('articles/0/6/1/'+this.category+'/Date_Desc/'+k).subscribe((data: {}) => { 
        this.posts = data;
        for (let post of this.posts){
          post.content = post.content.substring(0,100).replace(/<[^>]*>/g, '')+"...";
        }
      });
      
    });

  }

  loadNewData() {

    this.loading = true;
    let skip = this.pagination.cuurentPage * this.pagination.pageSize;
    let limit = this.pagination.pageSize;

    let keywords = '_0_';
    if(this.keywords) keywords = this.keywords;

    let category = this.category;

    this.restApi.get('articles/'+skip+'/'+limit+'/1/'+category+'/Date_Desc/'+keywords).subscribe((data: {}) => { 
      let tab: any;
      tab = data;
      for (let post of tab){
        post.content = post.content.substring(0,100).replace(/<[^>]*>/g, '')+"...";
        this.posts.push(post);
      }
      this.pagination.cuurentPage++;
      this.loading = false;
    });

  }
  
  filterByCat(cat) {

    if (this.category == cat) return false;

    this.loading = true;
    let limit = this.pagination.pageSize;

    let keywords = '_0_';
    if(this.keywords) keywords = this.keywords;

    this.category = cat;

    this.restApi.get('articles/0/'+limit+'/1/'+cat+'/Date_Desc/'+keywords).subscribe((data: {}) => { 
      let tab: any;
      tab = data;
      for (let post of tab){
        post.content = post.content.substring(0,100).replace(/<[^>]*>/g, '')+"...";
      }
      this.posts = tab;
      this.pagination.cuurentPage = 1;
      this.loading = false;
    });

    this.restApi.get('articles/0/'+limit+'/1/'+cat+'/Date_Desc/'+keywords+'/count').subscribe((data: {}) => { 
      let nbr = 0;
      if(data) nbr = data['nbr'];
      this.pagination['itemSize'] = nbr;
    });

  }

  filterResult (){

    this.loading = true;
    let limit = this.pagination.pageSize;

    let keywords = '_0_';
    if(this.keywords) keywords = this.keywords;

    let cat =this.category;

    this.restApi.get('articles/0/'+limit+'/1/'+cat+'/Date_Desc/'+keywords).subscribe((data: {}) => { 
      let tab: any;
      tab = data;
      for (let post of tab){
        post.content = post.content.substring(0,100).replace(/<[^>]*>/g, '')+"...";
      }
      this.posts = tab;
      this.pagination.cuurentPage = 1;
      this.loading = false;
    });

    this.restApi.get('articles/0/'+limit+'/1/'+cat+'/Date_Desc/'+keywords+'/count').subscribe((data: {}) => { 
      let nbr = 0;
      if(data) nbr = data['nbr'];
      this.pagination['itemSize'] = nbr;
    });
  }

  isClear() {
    if ((this.category == "all") && (!this.keywords)) return true;
    return false;
  }

  clearFilter() {
    this.category = "all";
    this.keywords = null;
    this.filterResult ();
  }

  isCatActive(cat) {
    if (cat == this.category) return "cat-active-filter";
    return "";
   }

}
