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

@NgModule({
  declarations: [HomeComponent, NotFoundComponent, ProjectsComponent, CoursesComponent, ExpertsComponent, EventsComponent, BlogComponent, EventSingleComponent, ProjectSingleComponent],
  imports: [
    CommonModule,
    ThemeModule
  ]
})
export class PagesModule { }
