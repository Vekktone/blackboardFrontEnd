import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from '@angular/material';
import {DiscussionTableComponent} from '../discussion-table/discussion-table.component';

let arr = [
  {position: 1, course: 'CS1234', announcement: 'Homework 3'},
  {position: 2, course: 'CS4253', announcement: 'Report Guidelines'},
  {position: 3, course: 'CS4833', announcement: 'Test Review'},
];

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})

export class DiscussionComponent implements OnInit {

  userType: string;
  subject: string;
  body: string;
  showMessage: boolean;
  displayedColumns: string[] = ['position', 'course', 'announcement'];
  dataSource = arr;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
    this.subject = '';
    this.body = '';
    this.showMessage = false;
  }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

  }

  showIt() {
    this.showMessage = true;
  }

  openDiscussionTable(course: string) {

    const dialogRef = this.dialog.open(DiscussionTableComponent, {
      width: '1000px',
      data: {title: course}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }


}
