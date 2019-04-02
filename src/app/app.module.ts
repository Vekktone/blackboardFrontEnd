import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {StudentListComponent} from './student-list/student-list.component';
import {StudentService} from './shared';

import {EmailService} from './shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailComponent} from './email/email.component';

import {FormUploadComponent} from './form-upload/form-upload.component';
import {UploadFileService} from './shared/upload-file.service';

import {AppRoutingModule} from './/app-routing.module';
import {AddStudentComponent} from './add-student/add-student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './login/login.component';
import {MatCardModule, MatInputModule, MatProgressSpinnerModule, MatSidenavModule, MatIconModule, MatListModule} from "@angular/material";
import { MainHubComponent } from './main-hub/main-hub.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DiscussionComponent } from './discussion/discussion.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmailPageComponent } from './email-page/email-page.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CoursesComponent } from './courses/courses.component';

/**
 * declarations, imports, providers, etc...
 */
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    EmailComponent,
    FormUploadComponent,
    AddStudentComponent,
    EditStudentComponent,
    LoginComponent,
    MainHubComponent,
    NavComponent,
    DiscussionComponent,
    CalendarComponent,
    EmailPageComponent,
    AnnouncementsComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
  ],
  exports: [],
  providers: [StudentService, EmailService, UploadFileService, StudentListComponent, EmailComponent, AddStudentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
