import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LaunchDataDashboardComponent } from './launch-dashboard/launch-data-dashboard/launch-data-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiGeneralInterceptor } from './services/interceptors/api-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDataDashboardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    ScrollingModule,
    FlexLayoutModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ApiGeneralInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
