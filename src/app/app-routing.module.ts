import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizDashboardComponent } from './views/layout/quiz-dashboard/quiz-dashboard.component';
import { QuizFormComponent } from './views/layout/quiz-form/quiz-form.component';
import { QuizTableComponent } from './views/layout/quiz-table/quiz-table.component';
import { LoginComponent } from './views/login/login.component';
import { Layout_loginComponent } from './views/layout_login.component';
import { LayoutComponent } from './views/layout/layout.component';
import { RegisterComponent } from './views/register/register.component';
import { AssignmentsHistoryComponent } from "./views/assignments-history/assignments-history.component";
import { AssignmentsDetailComponent } from "./views/assignments-detail/assignments-detail.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: QuizDashboardComponent },
      { path: 'form', component: QuizFormComponent },
      { path: 'table', component: QuizTableComponent },
      { path: 'assignments-history', component: AssignmentsHistoryComponent },
      { path: 'assignments-detail', component: AssignmentsDetailComponent }
    ]
  },
  {
    path: 'user',
    component: Layout_loginComponent,
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
export class AppRoutingModule { }
