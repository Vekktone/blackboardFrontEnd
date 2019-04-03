import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {XunkCalendarModule} from "xunk-calendar";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  userType: string;
  public selDate = { date: 1, month: 1, year: 1 };
  public heatmap = {} as any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.route.snapshot.params['userType'];
    this.selDate = XunkCalendarModule.getToday();
    this.heatmap = this.genDemoHeatmap();

  }

  /** Generates a demo heatmap */
  genDemoHeatmap(): any {
    // const year = new Date().getFullYear();
    const heatmap = {};
    // for (let m = 1; m <= 12; m++) {
    //   const month = XunkCalendarModule.zeroPad(m, 2);
    //   const entries = {'02': 1.0, '06': 0.1, '08': 0.4, '13': 0.7, '15': 0.3, '21': 0.1, '24': 0.5} as any;
    //   for (const key in entries) {
    //     if (key in entries) {
    //       heatmap[Number(year.toString() + month.toString() + key)] = entries[key];
    //     }
    //   }
    // }
    return heatmap;
  }

  /** Log changes in date */
  dateChanged(data: any) {
    console.log(data);
  }

}
