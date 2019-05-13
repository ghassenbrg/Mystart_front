import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeModule } from '../theme/theme.module';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesComponent } from './courses/courses.component';
import { ExpertsComponent } from './experts/experts.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { EventSingleComponent } from './event-single/event-single.component';
import { ProjectSingleComponent } from './project-single/project-single.component';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from '../core/rest-api.service';
import { TimeService } from '../core/time.service';
import { FacebookModule } from 'ngx-facebook';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpertSingleComponent } from './expert-single/expert-single.component';
import { AccountSettingComponent } from './profile/account-setting/account-setting.component';
import { QuestionsComponent } from './questions/questions.component';
import { MessagesComponent } from './profile/messages/messages.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseSingleComponent } from './course-single/course-single.component';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent, ProjectsComponent, CoursesComponent, ExpertsComponent, EventsComponent, BlogComponent, EventSingleComponent, ProjectSingleComponent, BlogSingleComponent, ProfileComponent, ExpertSingleComponent, AccountSettingComponent, QuestionsComponent, MessagesComponent, NotAllowedComponent, AddProjectComponent, CourseSingleComponent],
  imports: [
    CommonModule,
    ThemeModule,
    HttpClientModule,
    FacebookModule.forRoot(),
    FormsModule,
    CKEditorModule,
    NgbModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [
    RestApiService,
    TimeService, 
    { provide: NZ_I18N, useValue: en_US }
  ],
})
export class PagesModule { }
