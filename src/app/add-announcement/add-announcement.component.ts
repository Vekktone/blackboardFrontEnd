import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {

  courseId: string;
  descriptionText: string;

  constructor(
    public dialogRef: MatDialogRef<AddAnnouncementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.courseId = "";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  submitAnnouncement() {

    const ret = [this.courseId, this.descriptionText];
    this.dialogRef.close(ret);
  }

}
