import {NgModule} from '@angular/core';
import {ExamComponent} from './components/exam/exam.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LayoutLoginComponent} from './components/layout-login.component';
import {LayoutComponent} from './components/layout/layout.component';
import {AssignmentsHistoryComponent} from './components/assignments-history/assignments-history.component';
import {AssignmentsDetailComponent} from './components/assignments-detail/assignments-detail.component';
import {DetailGroupComponent} from './components/detail-group/detail-group.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'assignments-history', component: AssignmentsHistoryComponent},
      {path: 'assignments-detail', component: AssignmentsDetailComponent},
      {path: 'detail-group', component: DetailGroupComponent},
      {path: 'exam', component: ExamComponent},
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
