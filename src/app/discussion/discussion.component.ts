import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Announcements} from '../announcements/announcements.component';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})

export class DiscussionComponent implements OnInit {

  userType: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

  }

}
