import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/rest-api.service';
import { TimeService } from 'src/app/core/time.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  array = ['Test1 lorem ipsum dolor set amet.', 'test2', 'Test1 lorem ipsum dolor set amet.', 'test2', 'Test1 lorem ipsum dolor set amet.', 'test2'];
  
  categories: any;
  category = 'all';

  sliderContent = [];
  featuredContent = [];
  posts : any;

  pagination = {
    cuurentPage: 1,
    pageSize: 6
  }

  loading = false;
  
  constructor(private title: Title, private route: ActivatedRoute, public restApi: RestApiService, private time: TimeService) {
    this.title.setTitle("Mystart | Blog")
   }

  ngOnInit() {

    this.restApi.get('categories').subscribe((data: {}) => {
      this.categories = data;
    });

    this.restApi.get('articles/0/4/1/all/Date_Desc/_0_').subscribe((data: {}) => { 
      for (let i =0; i<4; i++){
        data[i].content = data[i].content.substring(0,70).replace(/<[^>]*>/g, '')+"...";
        if (i<2) this.sliderContent.push(data[i]);
        else this.featuredContent.push(data[i]);
      }
    });

    this.restApi.get('articles/4/6/1/all/Date_Desc/_0_/count').subscribe((data: {}) => { 
      let nbr = 0;
      if(data) nbr = data['nbr'];
      this.pagination['itemSize'] = nbr - 4;
    });

    this.restApi.get('articles/4/6/1/all/Date_Desc/_0_').subscribe((data: {}) => { 
      this.posts = data;
      for (let post of this.posts){
        post.content = post.content.substring(0,100).replace(/<[^>]*>/g, '')+"...";
      }
    });

  }

  loadNewData() {

    this.loading = true;
    let skip = this.pagination.cuurentPage * this.pagination.pageSize;
    let limit = this.pagination.pageSize;

    let category = "all";
    if (this.category) category = this.category;
    else skip = skip + 4;

    this.restApi.get('articles/'+skip+'/'+limit+'/1/'+category+'/Date_Desc/_0_').subscribe((data: {}) => { 
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
    let skip = 0;
    let limit = this.pagination.pageSize;

    this.category = cat;
    if (cat == 'all') skip = skip + 4;

    this.restApi.get('articles/'+skip+'/'+limit+'/1/'+cat+'/Date_Desc/_0_').subscribe((data: {}) => { 
      let tab: any;
      tab = data;
      for (let post of tab){
        post.content = post.content.substring(0,100).replace(/<[^>]*>/g, '')+"...";
      }
      this.posts = tab;
      this.pagination.cuurentPage = 1;
      this.loading = false;
    });

    this.restApi.get('articles/'+skip+'/'+limit+'/1/'+cat+'/Date_Desc/_0_/count').subscribe((data: {}) => { 
      let nbr = 0;
      if(data) nbr = data['nbr'];
      if (cat == 'all') nbr = nbr - 4;
      this.pagination['itemSize'] = nbr;
    });

  }

  isCatActive(cat) {
    if (cat == this.category) return "cat-active-filter";
    return "";
   }

}
