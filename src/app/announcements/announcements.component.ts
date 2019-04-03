import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export interface Announcements {
  announcement: string;
  position: number;
  course: string;
}

const ANNOUNCEMENT: Announcements[] = [
  {position: 1, course: 'CS1234', announcement: 'Homework is due Friday!'},
  {position: 2, course: 'CS4253', announcement: 'Bring you lab notebooks to class!'},
  {position: 3, course: 'CS4833', announcement: 'Recitation has been canceled.'},
];

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})

export class AnnouncementsComponent implements OnInit {

  userType: string;
  displayedColumns: string[] = ['position', 'course', 'announcement'];
  dataSource = ANNOUNCEMENT;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

  }

}
