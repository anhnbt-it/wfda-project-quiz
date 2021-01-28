import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuizDashboardComponent} from './layout/quiz-dashboard/quiz-dashboard.component';
import {QuizFormComponent} from './layout/quiz-form/quiz-form.component';
import {QuizTableComponent} from './layout/quiz-table/quiz-table.component';
import {DetailGroupComponent} from './layout/detail-group/detail-group.component';
import {ExamComponent} from './layout/exam/exam.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: QuizDashboardComponent,
  },
  {
    path: 'detail-group',
    component: DetailGroupComponent,
  },
  {
    path: 'exam',
    component: ExamComponent,
  },
  {path: 'form', component: QuizFormComponent},
  {path: 'table', component: QuizTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
