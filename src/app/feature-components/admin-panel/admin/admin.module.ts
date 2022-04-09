import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { NgPrimeModule } from 'src/app/ng-prime-module';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class AdminModule { }
