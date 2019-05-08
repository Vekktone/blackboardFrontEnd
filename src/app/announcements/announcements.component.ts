import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AddAnnouncementComponent} from '../add-announcement/add-announcement.component';

export interface Announcements {
  announcement: string;
  position: number;
  course: string;
}


let arr = [
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
  dataSource = arr;
  canAddAnnouncements;
  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

    if (this.userType === 'student')
    {
      this.canAddAnnouncements = false;
    }
    else if (this.userType === 'professor')
    {
      this.canAddAnnouncements = true;
    }

  }

  openAnnouncementDialog() {

    const dialogRef = this.dialog.open(AddAnnouncementComponent, {
      width: '500px',
      data: {title: 'Add Announcement'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      arr = [
        {position: 1, course: 'CS1234', announcement: 'Homework is due Friday!'},
        {position: 2, course: 'CS4253', announcement: 'Bring you lab notebooks to class!'},
        {position: 3, course: 'CS4833', announcement: 'Recitation has been canceled.'},
        {position: 4, course: result[0], announcement: result[1]},
      ];
      this.dataSource = arr;
    });

  }

}
