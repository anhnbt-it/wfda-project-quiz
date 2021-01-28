import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizDashboardComponent } from './layout/quiz-dashboard/quiz-dashboard.component';
import { QuizFormComponent } from './layout/quiz-form/quiz-form.component';
import { QuizTableComponent } from './layout/quiz-table/quiz-table.component';
import { LoginComponent } from "./views/login/login.component";
import { Layout_loginComponent } from "./views/layout_login.component";
import { LayoutComponent } from "./layout/layout.component";
import { RegisterComponent } from "./views/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: QuizDashboardComponent },
      { path: 'form', component: QuizFormComponent },
      { path: 'table', component: QuizTableComponent },
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
