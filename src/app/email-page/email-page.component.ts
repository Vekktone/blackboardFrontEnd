import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-email-page',
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.css']
})
export class EmailPageComponent implements OnInit {

  userType: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

  }

}
