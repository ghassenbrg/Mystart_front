import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestApiService } from 'src/app/core/rest-api.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounceIn))])
  ]
})
export class ProjectsComponent implements OnInit {

  bounceIn: any;

  params = {
    title: "Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "Projects"
  }
  projects : any;

  pagination = {
    cuurentPage: 1,
    pageSize: 4
  }
  loading = false;

  categories;
  filter = {};
  
  constructor( private title: Title, public restApi: RestApiService) {
    this.title.setTitle("Mystart | Projects")
   }

  ngOnInit() {

    this.filter['keywords'] = '';
    this.filter['confidentiality'] = 'All';

    this.restApi.get('categories').subscribe((data: {}) => {
      this.categories = data;
    });

    this.restApi.get('projects/0/'+this.pagination.pageSize+'/1').subscribe((data: {}) => {
      this.projects = data;
    });
    
    this.restApi.get('projects/count').subscribe((data: {}) => {
      this.pagination['itemSize'] = data['nbr'];
      console.log(this.pagination['itemSize']);
    });
  }

  
  loadNewData() {
    let keywords = this.filter['keywords'] ;
    let category = this.filter['category'] ;
    if(!category) category = 'all';
    if(keywords.length == 0) keywords = '_0_'; 

    this.loading = true;
    let tab :any;
    let skip = this.pagination.cuurentPage * this.pagination.pageSize;
    let limit = this.pagination.pageSize;
    
    this.restApi.get('projects/'+skip+'/'+limit+'/1/'+category+'/'+keywords+'/'+this.filter['confidentiality']).subscribe((data: {}) => {
      tab = data;
      for (let d of tab){
       this.projects.push(d);
      }
      this.pagination.cuurentPage++;
      this.loading = false;
      console.log('size: '+this.pagination['itemSize']+' | page: '+this.pagination.cuurentPage);
    });
 }

 filterResult() {
  this.loading = true;
  this.pagination.cuurentPage = 1;
   let keywords = this.filter['keywords'] ;
   let category = this.filter['category'] ;
   if(!category) category = 'all';
   if(keywords.length == 0) keywords = '_0_'; 
  this.restApi.get('projects/0/'+this.pagination.pageSize+'/1/'+category+'/'+keywords+'/'+this.filter['confidentiality']).subscribe((data: {}) => {
    this.projects = data;
    this.loading = false;
  });
  this.restApi.get('projects/0/'+this.pagination.pageSize+'/1/'+category+'/'+keywords+'/'+this.filter['confidentiality']+'/count').subscribe((data: {}) => {
    let nbr = 0;
    if(data) nbr = data['nbr'];
    this.pagination['itemSize'] = nbr;
    console.log('size: '+this.pagination['itemSize']+' | page: '+this.pagination.cuurentPage);
  });

 }

 isClear(){
   if ((this.filter['keywords'] == '') && (this.filter['confidentiality'] == 'All') && (!this.filter['category'])) {
     return true;
   }
   return false;
 }

 clearFilter(){
  this.filter['keywords'] = '';
  this.filter['confidentiality'] = 'All';
  this.filter['category'] = null;
  this.filterResult();
 }

 filterByCat(cat){
   if (cat == 'All') this.filter['category'] = null;
   else this.filter['category'] = cat;
    
  this.filterResult();
 }

 isCatActive(cat) {
  if (cat == this.filter['category']) return "cat-active";
  if ((cat == 'All') && (!this.filter['category'])) return "cat-active";
  return "";
 }
}
