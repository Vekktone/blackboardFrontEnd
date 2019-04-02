import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {EditStudentComponent} from './edit-student/edit-student.component';
import {LoginComponent} from "./login/login.component";
import {MainHubComponent} from "./main-hub/main-hub.component";
import {DiscussionComponent} from "./discussion/discussion.component";
import {EmailPageComponent} from "./email-page/email-page.component";
import {AnnouncementsComponent} from "./announcements/announcements.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {CoursesComponent} from "./courses/courses.component";

const routes: Routes = [
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'editStudent', component: EditStudentComponent },
  { path: 'dashboard', component: StudentListComponent },
  { path: 'login', component: LoginComponent},
  { path: 'mainHub/:userType', component: MainHubComponent},
  { path: 'discussion/:userType', component: DiscussionComponent},
  { path: 'email/:userType', component: EmailPageComponent},
  { path: 'announcements/:userType', component: AnnouncementsComponent},
  { path: 'calendar/:userType', component: CalendarComponent},
  { path: 'courses/:userType', component: CoursesComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
