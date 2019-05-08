import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Announcements} from '../announcements/announcements.component';
import {GradesTableComponent} from '../grades-table/grades-table.component';
import {MatDialog} from '@angular/material';
import {ContentTableComponent} from '../content-table/content-table.component';

export interface Announcements {
  announcement: string;
  position: number;
  course: string;
}

const ANNOUNCEMENT: Announcements[] = [
  {position: 1, course: 'CS1234', announcement: 'Analysis of Algorithms'},
  {position: 2, course: 'CS4253', announcement: 'Database Systems'},
  {position: 3, course: 'CS4833', announcement: 'Artificial Intelligence'},
];



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  userType: string;
  displayedColumns: string[] = ['position', 'course', 'announcement'];
  dataSource = ANNOUNCEMENT;

  showGrades = false;
  courseNum: any;

  selectRow (row) {
    this.showGrades = true;
  }

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

  }

  openGradesTable(course: string) {

    const dialogRef = this.dialog.open(GradesTableComponent, {
      width: '1000px',
      data: {title: course}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  openContentTable(course: string) {

    const dialogRef = this.dialog.open(ContentTableComponent, {
      width: '1000px',
      data: {title: course}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
