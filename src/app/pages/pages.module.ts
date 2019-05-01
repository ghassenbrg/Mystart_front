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

@NgModule({
  declarations: [HomeComponent, NotFoundComponent, ProjectsComponent, CoursesComponent, ExpertsComponent, EventsComponent, BlogComponent, EventSingleComponent, ProjectSingleComponent, BlogSingleComponent, ProfileComponent, ExpertSingleComponent, AccountSettingComponent],
  imports: [
    CommonModule,
    ThemeModule,
    HttpClientModule,
    FacebookModule.forRoot()
  ],
  providers: [
    RestApiService,
    TimeService
  ],
})
export class PagesModule { }
