import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './views/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ExamComponent } from './views/exam/exam.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutLoginComponent } from './views/layout-login.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AssignmentsHistoryComponent } from './views/assignments-history/assignments-history.component';
import { AssignmentsDetailComponent } from './views/assignments-detail/assignments-detail.component';
import { DetailGroupComponent } from './views/detail-group/detail-group.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DetailGroupComponent,
    ExamComponent,
    DetailGroupComponent,
    LayoutLoginComponent,
    LoginComponent,
    RegisterComponent,
    AssignmentsHistoryComponent,
    AssignmentsDetailComponent,
    FormatTimePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatTooltipModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
