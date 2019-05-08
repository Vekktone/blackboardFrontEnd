import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AddAnnouncementComponent} from '../add-announcement/add-announcement.component';
import {DialogData} from '../grades-table/grades-table.component';
import {PostReplyComponent} from '../post-reply/post-reply.component';

let arr = [
  {position: 1, course: 'Roke', announcement: 'Has anyone figured out number 3 on the homework?'},
  {position: 2, course: 'Riley', announcement: 'No, I am just now starting it.'},
  {position: 3, course: 'Clarence', announcement: 'I am working on it now.'},
];

@Component({
  selector: 'app-discussion-table',
  templateUrl: './discussion-table.component.html',
  styleUrls: ['./discussion-table.component.css']
})
export class DiscussionTableComponent implements OnInit {

  displayedColumns: string[] = ['No', 'User', 'Message'];
  dataSource = arr;

  constructor(
    public dialogRef: MatDialogRef<AddAnnouncementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  openAddThreadDialog() {
    const dialogRef = this.dialog.open(PostReplyComponent, {
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
