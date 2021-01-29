import {NgModule} from '@angular/core';
import {ExamComponent} from './views/exam/exam.component';
import {Routes, RouterModule} from '@angular/router';
import {QuizDashboardComponent} from './views/layout/quiz-dashboard/quiz-dashboard.component';
import {QuizFormComponent} from './views/layout/quiz-form/quiz-form.component';
import {QuizTableComponent} from './views/layout/quiz-table/quiz-table.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {LayoutLoginComponent} from './views/layout-login.component';
import {LayoutComponent} from './views/layout/layout.component';
import {AssignmentsHistoryComponent} from './views/assignments-history/assignments-history.component';
import {AssignmentsDetailComponent} from './views/assignments-detail/assignments-detail.component';
import {DetailGroupComponent} from './views/detail-group/detail-group.component';
import {ResultExamComponent} from './views/result-exam/result-exam.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: QuizDashboardComponent,
  },
  {path: 'form', component: QuizFormComponent},
  {path: 'table', component: QuizTableComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'home', component: QuizDashboardComponent},
      {path: 'form', component: QuizFormComponent},
      {path: 'table', component: QuizTableComponent},
      {path: 'assignments-history', component: AssignmentsHistoryComponent},
      {path: 'assignments-detail', component: AssignmentsDetailComponent},
      {path: 'detail-group', component: DetailGroupComponent},
      {path: 'exam', component: ExamComponent},
      {path: 'result-exam', component: ResultExamComponent},
    ]
  },
  {
    path: 'user',
    component: LayoutLoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
