import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  userType: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

  }

}
