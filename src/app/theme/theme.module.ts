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

@NgModule({
  declarations: [TopMenuComponent, MainMenuComponent, FooterComponent, MainSliderComponent, FlatCounterComponent, FlatServicesComponent, FlatVideoComponent, BlogFeaturedComponent, UpcomingEventsComponent, UsersReviewsComponent, PageTitleComponent],
  imports: [
    CommonModule
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
    PageTitleComponent
  ]
})
export class ThemeModule { }
