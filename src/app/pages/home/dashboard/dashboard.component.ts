import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

declare function require(path: string): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    // require('../../../../assets/js/charts.js')();
  }

}
