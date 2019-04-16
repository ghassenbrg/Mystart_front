import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
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
