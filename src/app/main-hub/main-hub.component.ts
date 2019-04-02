import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main-hub',
  templateUrl: './main-hub.component.html',
  styleUrls: ['./main-hub.component.css']
})
export class MainHubComponent implements OnInit {
  userType: string;
  imageLoc: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];

    if (this.userType === 'student')
    {
      this.imageLoc = "../../assets/images/defaultSkin.jpg"
    }
    else if (this.userType === 'professor')
    {
      this.imageLoc = "../../assets/images/wizardSkin.jpeg"
    }
  }

}
