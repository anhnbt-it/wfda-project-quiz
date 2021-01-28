import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizDashboardComponent } from './layout/quiz-dashboard/quiz-dashboard.component';
import { QuizFormComponent } from './layout/quiz-form/quiz-form.component';
import { QuizTableComponent } from './layout/quiz-table/quiz-table.component';
import {AssignmentsHistoryComponent} from "./views/assignments-history/assignments-history.component";
import {AssignmentsDetailComponent} from "./views/assignments-detail/assignments-detail.component";

const routes: Routes = [
  { path: 'dashboard', component: QuizDashboardComponent },
  { path: 'form', component: QuizFormComponent },
  { path: 'table', component: QuizTableComponent },
  { path: 'assignments-history', component: AssignmentsHistoryComponent },
  { path: 'assignments-detail/:id', component: AssignmentsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
