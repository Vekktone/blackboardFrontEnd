import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AddAnnouncementComponent} from '../add-announcement/add-announcement.component';

export interface DialogData {
  title: string;
}

export interface Grades {
  announcement: string;
  position: number;
  course: string;
}


const GRADES: Grades[] = [
  {position: 1, course: 'Assignment 1', announcement: '90/100'},
  {position: 2, course: 'Assignment 2', announcement: '100/100'},
  {position: 3, course: 'Midterm 1', announcement: '78/100'},
];


@Component({
  selector: 'app-grades-table',
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.css']
})
export class GradesTableComponent implements OnInit {

  displayedColumns: string[] = ['No', 'CourseId', 'Grade'];
  dataSource = GRADES;


  constructor(
    public dialogRef: MatDialogRef<AddAnnouncementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


}
