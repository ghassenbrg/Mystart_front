import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainSliderComponent } from './main-slider/main-slider.component';

@NgModule({
  declarations: [TopMenuComponent, MainMenuComponent, FooterComponent, MainSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopMenuComponent,
    MainMenuComponent,
    FooterComponent,
    MainSliderComponent
  ]
})
export class ThemeModule { }
