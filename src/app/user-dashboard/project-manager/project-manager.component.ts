import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { UserDashLayoutComponent } from '../user-dash-layout/user-dash-layout.component';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  i = 0;
  listOfData: any[] = [];
  projects: any;
  loading = false;

  constructor(private restApi: RestApiService, private parent: UserDashLayoutComponent) { }

  ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.listOfData  = [];
    this.i = 0;
    this.restApi.get('user/'+this.parent.loggedUser._id+'/projects').subscribe((data: {}) => {
      this.projects = data;
      for (let project of this.projects) {
        this.addRow(project);
      }
    });
  }

  test() {}

  updateProject(i, type?) {
    if (!this.loading) {
      this.loading = true;
      if (type == 'published') {
        console.log("fel assl.."+this.projects[i].published);
        this.listOfData[i].published = !this.listOfData[i].published;
        this.projects[i].published = this.listOfData[i].published;
        console.log("tawa.."+this.projects[i].published);
      } else if (type == 'private') {
        console.log("fel assl.."+this.projects[i].private);
        this.listOfData[i].private = !this.listOfData[i].private;
        this.projects[i].private = this.listOfData[i].private;
        console.log("tawa.."+this.projects[i].private);
      }
      this.restApi.update('project/'+this.listOfData[i].id,this.projects[i]).subscribe((data: {}) => {
        this.loading = false;
        console.log("i'm here..");
        console.log("wallét..\n public: "+this.projects[i].published+"\n private: "+this.projects[i].private);
      });
    }

  }

  addRow(project): void {
    this.listOfData = [
      ...this.listOfData,
      {
        nb: this.i,
        id: project._id,
        title: project.title,
        photo: project.coverImg,
        category: project.category,
        published: project.published,
        private: project.private
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

}
