import { Component, OnInit, TemplateRef } from '@angular/core';
import { RestApiService } from 'src/app/core/rest-api.service';
import { UserDashLayoutComponent } from '../user-dash-layout/user-dash-layout.component';
import { NzModalRef, NzModalService, NzNotificationService } from 'ng-zorro-antd';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
  categories: any;
  //var for mdoal
  tplModal: NzModalRef;
  tplModalButtonLoading = false;
  //editor
  public Editor = ClassicEditor;
  content = '<p>Hello world !</p>';

  constructor(private restApi: RestApiService, private parent: UserDashLayoutComponent,
     private modalService: NzModalService, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.loadData();
    this.restApi.get('categories').subscribe((data: {}) => {
      this.categories = data;
    });
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
        this.listOfData[i].published = !this.listOfData[i].published;
        this.projects[i].published = this.listOfData[i].published;
      } else if (type == 'private') {
        this.listOfData[i].private = !this.listOfData[i].private;
        this.projects[i].private = this.listOfData[i].private;
      }
      this.restApi.update('project/'+this.listOfData[i].id,this.projects[i]).subscribe((data: {}) => {
        this.loading = false;
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

  deleteRow(id: string,i): void {
    let title = this.listOfData[i].title;
    this.restApi.delete('project/'+id).subscribe((data: {}) => {
      this.listOfData = this.listOfData.filter(d => d.id !== id);
      this.notification.create(
        'error',
        'Project deleted',
        'The project with title: '+title+' is successfully deleted.'
      );
    });  
  }

  // popup methods
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: true,
      nzClosable: true,
      nzWidth: "50%",
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
      this.notification.create(
        'success',
        'Add new project',
        'The project is successfully added.'
      );
    }, 1000);
  }

}
