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
    MatButtonToggleModule
  ],
  exports: [],
  providers: [StudentService, EmailService, UploadFileService, StudentListComponent, EmailComponent, AddStudentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
