import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Announcements} from '../announcements/announcements.component';

export interface Announcements {
  announcement: string;
  position: number;
  course: string;
}

export interface Content {
  announcement: string;
  position: number;
  course: string;
}

export interface Grades {
  announcement: string;
  position: number;
  course: string;
}

const ANNOUNCEMENT: Announcements[] = [
  {position: 1, course: 'CS1234', announcement: 'Analysis of Algorithms'},
  {position: 2, course: 'CS4253', announcement: 'Database Systems'},
  {position: 3, course: 'CS4833', announcement: 'Artificial Intelligence'},
];

const CONTENT: Content[] = [
  {position: 1, course: 'Slides 1-1', announcement: '↓'},
  {position: 2, course: 'Slides 1-2', announcement: '↓'},
  {position: 3, course: 'Assignment 1', announcement: '↓'},
];

const GRADES: Grades[] = [
  {position: 1, course: 'Assignment 1', announcement: '90/100'},
  {position: 2, course: 'Assignment 2', announcement: '100/100'},
  {position: 3, course: 'Midterm 1', announcement: '78/100'},
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

  dataSource2 = CONTENT;
  dataSource3 = GRADES;
  showGrades = false;
  courseNum: any;

  selectRow (row) {
    this.showGrades = true;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

  }

}
