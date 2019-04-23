import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeModule } from '../theme/theme.module';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesComponent } from './courses/courses.component';
import { ExpertsComponent } from './experts/experts.component';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent, ProjectsComponent, CoursesComponent, ExpertsComponent],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    HomeComponent, 
    NotFoundComponent
  ]
})
export class PagesModule { }
