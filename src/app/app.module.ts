import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ThemeModule } from './theme/theme.module';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './core/rest-api.service';
import { FacebookModule } from 'ngx-facebook';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ThemeModule,
    HttpClientModule,
    FacebookModule.forRoot()
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
