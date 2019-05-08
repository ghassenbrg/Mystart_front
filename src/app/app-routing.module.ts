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
import { TestComponent } from './test/test.component';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';
import { AuthGuardService } from './core/auth-guard.service';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children : [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'project/:id', component: ProjectSingleComponent, canActivate: [AuthGuardService] },
    { path: 'experts', component: ExpertsComponent },
    { path: 'expert/:id', component: ExpertSingleComponent, canActivate: [AuthGuardService] },
    { path: 'questions', component: QuestionsComponent, canActivate: [AuthGuardService] },
    { path: 'courses', component: CoursesComponent },
    { path: 'events', component: EventsComponent },
    { path: 'event/:id', component: EventSingleComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'article/:id', component: BlogSingleComponent },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuardService] },
    { path: 'myprofile/setting', component: AccountSettingComponent, canActivate: [AuthGuardService] },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuardService] },
    { path: 'add-project', component: AddProjectComponent, canActivate: [AuthGuardService] },
    { path: 'notAllowed', component: NotAllowedComponent },
    { path: 'test', component: TestComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
