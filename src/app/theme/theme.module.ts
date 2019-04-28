import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainSliderComponent } from './home-components/main-slider/main-slider.component';
import { FlatCounterComponent } from './home-components/flat-counter/flat-counter.component';
import { FlatServicesComponent } from './home-components/flat-services/flat-services.component';
import { FlatVideoComponent } from './home-components/flat-video/flat-video.component';
import { BlogFeaturedComponent } from './home-components/blog-featured/blog-featured.component';
import { UpcomingEventsComponent } from './home-components/upcoming-events/upcoming-events.component';
import { UsersReviewsComponent } from './home-components/users-reviews/users-reviews.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { EventCardComponent } from './event-components/event-card/event-card.component';
import { LoginFormComponent } from './login-register-form/login-form/login-form.component';
import { RegisterFormComponent } from './login-register-form/register-form/register-form.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular-6-social-login";
import { CookieService } from 'ngx-cookie-service';
import { RestApiService } from '../core/rest-api.service';
import { HttpClientModule } from '@angular/common/http';


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("372814659999579")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1060350906866-k7uisjl30pq6sb7epo6p8lt8pojog7t4.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}


@NgModule({
  declarations: [TopMenuComponent, MainMenuComponent, FooterComponent, MainSliderComponent, FlatCounterComponent, FlatServicesComponent, FlatVideoComponent, BlogFeaturedComponent, UpcomingEventsComponent, UsersReviewsComponent, PageTitleComponent, EventCardComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    CookieService,
    RestApiService
  ],
  exports: [
    TopMenuComponent,
    MainMenuComponent,
    FooterComponent,
    MainSliderComponent,
    FlatCounterComponent,
    FlatServicesComponent,
    FlatVideoComponent,
    BlogFeaturedComponent,
    UpcomingEventsComponent,
    UsersReviewsComponent,
    PageTitleComponent,
    EventCardComponent,
    LoginFormComponent
  ]
})
export class ThemeModule { }
