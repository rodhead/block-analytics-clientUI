import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgPrimeModule } from './ng-prime-module';
import { HomeTopToolbarComponent } from './global-components/home-top-toolbar/home-top-toolbar.component';
import { HomeComponent } from './feature-components/home/home.component';
import { UserDashboardModule } from './feature-components/user-dashboard/user-dashboard.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminModule } from './feature-components/admin-panel/admin/admin.module';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    HomeTopToolbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgPrimeModule,
    BrowserAnimationsModule,
    UserDashboardModule,
    FontAwesomeModule,
    AdminModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
