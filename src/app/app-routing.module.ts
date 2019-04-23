import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExpertsComponent } from './pages/experts/experts.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { EventsComponent } from './pages/events/events.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experts', component: ExpertsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
