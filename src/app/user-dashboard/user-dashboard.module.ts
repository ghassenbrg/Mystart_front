import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { FacebookModule } from 'ngx-facebook';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { RestApiService } from '../core/rest-api.service';
import { TimeService } from '../core/time.service';
import { UserDashLayoutComponent } from './user-dash-layout/user-dash-layout.component';
import { MainComponent } from './main/main.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

@NgModule({
  declarations: [UserDashLayoutComponent, MainComponent, MyProfileComponent, MyMessagesComponent, ProjectManagerComponent, MyCoursesComponent],
  imports: [
    CommonModule,
    ThemeModule,
    HttpClientModule,
    FacebookModule.forRoot(),
    FormsModule,
    CKEditorModule,
    NgbModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    RestApiService,
    TimeService, 
    { provide: NZ_I18N, useValue: en_US }
  ],
  exports: [
    UserDashLayoutComponent
  ]
})
export class UserDashboardModule { }
