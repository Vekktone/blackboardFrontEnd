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

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AppRoutingModule} from './/app-routing.module';
import {AddStudentComponent} from './add-student/add-student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';


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
    BsDropdownModule.forRoot(),
    AppRoutingModule,
  ],
  exports: [],
  providers: [StudentService, EmailService, UploadFileService, StudentListComponent, EmailComponent, AddStudentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
