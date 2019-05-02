import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExpertsComponent } from './pages/experts/experts.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { EventsComponent } from './pages/events/events.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EventSingleComponent } from './pages/event-single/event-single.component';
import { ProjectSingleComponent } from './pages/project-single/project-single.component';
import { LayoutComponent } from './layout/layout.component';
import { BlogSingleComponent } from './pages/blog-single/blog-single.component';
import { ExpertSingleComponent } from './pages/expert-single/expert-single.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { AccountSettingComponent } from './pages/profile/account-setting/account-setting.component';
import { MessagesComponent } from './pages/profile/messages/messages.component';
import { RegisterFormComponent } from './theme/login-register-form/register-form/register-form.component';
import { LoginFormComponent } from './theme/login-register-form/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children : [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project/:id', component: ProjectSingleComponent },
    { path: 'experts', component: ExpertsComponent },
    { path: 'expert/:id', component: ExpertSingleComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'events', component: EventsComponent },
    { path: 'event/:id', component: EventSingleComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'article/:id', component: BlogSingleComponent },
    { path: 'myprofile/setting', component: AccountSettingComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: '**', component: NotFoundComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
