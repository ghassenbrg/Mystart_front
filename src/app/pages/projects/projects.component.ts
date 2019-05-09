import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestApiService } from 'src/app/core/rest-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  params = {
    title: "Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    path: "Projects"
  }
  projects : any;

  pagination = {
    itemSize: Number,
    cuurentPage: 1,
    pageSize: 4
  }
  loading = false;

  filter = {};
  
  constructor( private title: Title, public restApi: RestApiService) {
    this.title.setTitle("Mystart | Projects")
   }

  ngOnInit() {
    this.filter['keywords'] = '';
    this.filter['confidentiality'] = 'All';
    this.restApi.get('projects/0/'+this.pagination.pageSize+'/1').subscribe((data: {}) => {
      this.projects = data;
    });
    this.restApi.get('projects/count').subscribe((data: {}) => {
      this.pagination.itemSize = data['nbr'];
      console.log(this.pagination.itemSize);
    });
  }

  
  loadNewData() {
    this.loading = true;
    let tab :any;
    let skip = this.pagination.cuurentPage * this.pagination.pageSize;
    let limit = this.pagination.pageSize;
    
    this.restApi.get('projects/'+skip+'/'+limit+'/1').subscribe((data: {}) => {
      tab = data;
      for (let d of tab){
       this.projects.push(d);
      }
      this.pagination.cuurentPage++;
      this.loading = false;
    });
 }

}
