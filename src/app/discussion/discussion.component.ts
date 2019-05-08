import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Announcements} from '../announcements/announcements.component';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  imports: [FormsModule],
  styleUrls: ['./discussion.component.css']
})

export class DiscussionComponent implements OnInit {

  userType: string;
  subject: string;
  body: string;
  showMessage: boolean;

  constructor(private route: ActivatedRoute) {
    this.subject = '';
    this.body = '';
    this.showMessage = false;
  }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

  }

  myFunc() {
    this.showMessage = true;
  }

}
