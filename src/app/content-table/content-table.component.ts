import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AddAnnouncementComponent} from '../add-announcement/add-announcement.component';
import {DialogData} from '../grades-table/grades-table.component';

export interface Content {
  position: number;
  course: string;
}

const CONTENT: Content[] = [
  {position: 1, course: 'Slides 1-1'},
  {position: 2, course: 'Slides 2-3'},
  {position: 3, course: 'Assignment 1'},
];

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {

  dataSource = CONTENT;
  displayedColumns: string[] = ['No', 'Item'];

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
