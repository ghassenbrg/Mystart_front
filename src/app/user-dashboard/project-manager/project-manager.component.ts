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
  // popup to authorize users
  authorizedPopupData = {
    usersID: [],
    usernames: [],
    err: '',
    indice: -1
  };
  authorizedIsVisible = false;
  popupUsername: string;


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
        private: project.private,
        verified: project.verified
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
    this.listOfData[i].verified = data.verified;
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

    if (this.photo.length > 0) this.popupData.coverImg = this.photo[0].response.fileUrl;
    this.popupData.attachments = [];
    for (let attachment of this.attachments) {
      this.popupData.attachments.push({name: attachment.name, url: attachment.response.fileUrl});
    }
    //this.popupData.verified = true;
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
      this.restApi.update('project/'+this.projects[this.popupConfig.i]._id,this.popupData).subscribe((data: {}) => {
        this.updateRow(data, this.popupConfig.i);
        this.projects[this.popupConfig.i] = data;
        this.tplModalButtonLoading = false;
        this.tplModal.destroy();
        this.notification.create(
          'success',
          'Update new project',
          'The project with title: "'+this.projects[this.popupConfig.i].title+'" is successfully updated.'
        );
      });
    }

  }

  fillPopup(data?){
    this.tplModalButtonLoading = false;
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
      this.popupData.verified= data.verified;
      this.popupConfig.method= 'update';

      let i = 0;
      for (let attachment of this.popupData.attachments){
        this.attachments.push({
          uid: 'attachment_'+i,
          name: attachment.name, 
          response: {fileUrl: attachment.url}
        });
        i++;
      }
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
      this.popupData.verified= null;
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

  // authorize users to see private projects
  showModal(i): void {
    this.popupUsername = '';
    this.authorizedPopupData.indice = i;
    this.authorizedPopupData.usersID = this.projects[i].authorized;
    this.authorizedPopupData.usernames = [];
    this.authorizedPopupData.err = '';
    for (let id of this.authorizedPopupData.usersID){
    this.restApi.get('username/'+id).subscribe((data: {}) => {
        this.authorizedPopupData.usernames.push(data['username']);
    });  
    }
    this.authorizedIsVisible = true;
  }

  handleOk(): void {
    let i = this.authorizedPopupData.indice;
    this.authorizedIsVisible = false;
    if (this.projects[i].authorized == this.authorizedPopupData.usersID) return;
    this.projects[i].authorized = this.authorizedPopupData.usersID;
    this.restApi.update('project/'+this.listOfData[i].id,this.projects[i]).subscribe((data: {}) => {
      this.notification.create(
        'success',
        'Authorized list was updated',
        'The Authorized list of the project with title: '+this.listOfData[i].title+' is successfully updated.'
      );
    });
  }

  handleCancel(): void {
    this.authorizedIsVisible = false;
  }

  deleteAuthorizeUser(i) {
    let userID = this.authorizedPopupData.usersID[i];
    let username = this.authorizedPopupData.usernames[i];
    this.authorizedPopupData.usersID = this.authorizedPopupData.usersID.filter(d => d !== userID);
    this.authorizedPopupData.usernames = this.authorizedPopupData.usernames.filter(d => d !== username);
  }
  authorizeUser() {
    let username = this.popupUsername;
    this.popupUsername = '';
    if (this.parent.loggedUser.username == username){
      this.authorizedPopupData.err = 'You cannot add yourself !';
      return;
    }
    this.restApi.get('id/'+username).subscribe((data: {}) => {
      if (data['message']){
        this.authorizedPopupData.err = data['message'];
        return;
      }
      this.authorizedPopupData.usernames = [
        username,
        ...this.authorizedPopupData.usernames
      ];
      this.authorizedPopupData.usersID = [
        data['id'],
        ...this.authorizedPopupData.usersID
      ];
  }); 
  }
}
