import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NgPrimeModule } from 'src/app/ng-prime-module';
import { UserFeedbackHistoryComponent } from './user-dashboard/user-feedback-history/user-feedback-history.component';
import { UserSeetingsComponent } from './user-dashboard/user-seetings/user-seetings.component';
import { Level1MetricsComponent } from './user-dashboard/level1-metrics/level1-metrics.component';
import { SentimentAnalysisComponent } from './user-dashboard/sentiment-analysis/sentiment-analysis.component';
import { CyFeedbackDataComponent } from './user-dashboard/cy-feedback-data/cy-feedback-data.component';
import { DataTablesModule } from "angular-datatables";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UpstreamFeedbackComponent } from './user-dashboard/upstream-feedback/upstream-feedback.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UserDashboardComponent,
    UserFeedbackHistoryComponent,
    UserSeetingsComponent,
    Level1MetricsComponent,
    SentimentAnalysisComponent,
    CyFeedbackDataComponent,
    UpstreamFeedbackComponent
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
    DataTablesModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RatingModule,
    FormsModule
  ],
  providers: [ConfirmationService, MessageService]

})
export class UserDashboardModule { }
