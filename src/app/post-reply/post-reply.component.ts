import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AddAnnouncementComponent, DialogData} from '../add-announcement/add-announcement.component';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent implements OnInit {

  username: string;
  reply: string;

  constructor(
    public dialogRef: MatDialogRef<AddAnnouncementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  submitReply() {

    const ret = [this.username, this.reply];
    this.dialogRef.close(ret);
  }

}
