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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

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
    FacebookModule.forRoot(),
    NgbModule,
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [RestApiService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
