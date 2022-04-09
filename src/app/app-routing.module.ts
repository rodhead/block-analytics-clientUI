import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './feature-components/admin-panel/admin/admin-dashboard/admin-dashboard.component';
import { RoleComponent } from './feature-components/admin-panel/admin/role/role.component';
import { UserComponent } from './feature-components/admin-panel/admin/user/user.component';
import { HomeComponent } from './feature-components/home/home.component';
import { CyFeedbackDataComponent } from './feature-components/user-dashboard/user-dashboard/cy-feedback-data/cy-feedback-data.component';
import { Level1MetricsComponent } from './feature-components/user-dashboard/user-dashboard/level1-metrics/level1-metrics.component';
import { SentimentAnalysisComponent } from './feature-components/user-dashboard/user-dashboard/sentiment-analysis/sentiment-analysis.component';
import { UserDashboardComponent } from './feature-components/user-dashboard/user-dashboard/user-dashboard.component';
import { UserFeedbackHistoryComponent } from './feature-components/user-dashboard/user-dashboard/user-feedback-history/user-feedback-history.component';
import { UserSeetingsComponent } from './feature-components/user-dashboard/user-dashboard/user-seetings/user-seetings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user-dashboard',
    //loadChildren: ()=> import('./feature-components/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule),
    component : UserDashboardComponent,
    children:[
      {
        path: 'feedback-history',
        component: UserFeedbackHistoryComponent
      },
      {
        path: 'user-settings',
        component: UserSeetingsComponent
      },
      {
        path: 'l1-metrics',
        component: Level1MetricsComponent
      },
      {
        path : 'sentiment-analysis',
        component: SentimentAnalysisComponent
      },
      {
        path: 'cy-feedback',
        component: CyFeedbackDataComponent
      }
    ]
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children:[{
        path: 'sys-users',
        component: UserComponent
      },
      {
        path: 'sys-roles',
        component: RoleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
