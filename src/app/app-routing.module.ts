import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizDashboardComponent } from './views/layout/quiz-dashboard/quiz-dashboard.component';
import { QuizFormComponent } from './views/layout/quiz-form/quiz-form.component';
import { QuizTableComponent } from './views/layout/quiz-table/quiz-table.component';
import {LoginComponent} from './views/login/login.component';
import {LayoutComponent} from './views/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz/dashboard', pathMatch: 'full' },
  {
    path: 'quiz',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: QuizDashboardComponent },
      { path: 'form', component: QuizFormComponent },
      { path: 'table', component: QuizTableComponent },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
