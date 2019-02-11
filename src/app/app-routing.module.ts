import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {EditStudentComponent} from './edit-student/edit-student.component';

const routes: Routes = [
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'editStudent', component: EditStudentComponent },
  { path: 'dashboard', component: StudentListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
