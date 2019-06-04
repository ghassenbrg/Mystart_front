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
  tplTitle: any; 
  tplContent: any;
  tplFooter: any;
  //editor
  public Editor = ClassicEditor;
  content = '<p>Hello world !</p>';
  //fileLists
  photo = [];
  attachments = [];
  //project popup
  popupData: any = {};
  popupConfig: any = {};

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

  test() {
  }

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

  updateRow(data, i) {


    this.listOfData[i].title = data.title;
    this.listOfData[i].photo = data.coverImg;
    this.listOfData[i].category = data.category;
    this.listOfData[i].published = data.published;
    this.listOfData[i].private = data.private;
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
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>, i?): void {
    this.popupConfig.i = i;
    this.fillPopup(this.projects[i]);
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

    if (this.photo) this.popupData.coverImg = this.photo[0].response.fileUrl;

    if (this.popupConfig.method == 'post') {
      this.restApi.post('projects/',this.popupData).subscribe((data: {}) => {
        this.addRow(data);
        this.projects.push(data);
        this.tplModalButtonLoading = false;
        this.tplModal.destroy();
        this.notification.create(
          'success',
          'Add new project',
          'The project is successfully added.'
        );
      });
    } else if (this.popupConfig.method == 'update') {
      this.restApi.update('project/'+this.listOfData[this.popupConfig.i].id,this.popupData).subscribe((data: {}) => {
        this.updateRow(data, this.popupConfig.i);
        this.projects[this.popupConfig.i] = data;
        this.tplModalButtonLoading = false;
        this.tplModal.destroy();
        this.notification.create(
          'success',
          'Add new project',
          'The project is successfully added.'
        );
      });
    }

  }

  fillPopup(data?){
    this.photo = [];
    this.attachments = [];
    if (data) {
      this.popupData.title= data.title;
      this.popupData.description= data.description;
      this.popupData.overview= data.overview;
      this.popupData.coverImg= data.coverImg;
      this.popupData.published= data.published;
      this.popupData.category= data.category;
      this.popupData.private= data.private;
      this.popupData.attachments= data.attachments;
      this.popupData.authorized= data.authorized;
      this.popupConfig.method= 'update';
    } else {
      this.popupData.title= null;
      this.popupData.description= null;
      this.popupData.overview= '';
      this.popupData.coverImg= null;
      this.popupData.published= true;
      this.popupData.category= null;
      this.popupData.private= false;
      this.popupData.attachments= [];
      this.popupData.authorized= [];
      this.popupConfig.method= 'post';
    }
    this.popupData.author= this.parent.loggedUser._id;
  }

  isUploadDisabled(max, photo?){
    let check = false;
    if ((photo) && (this.photo.length == max)) check = true;
    else if (this.attachments.length == max) check = true;
    return check;
  }

}
