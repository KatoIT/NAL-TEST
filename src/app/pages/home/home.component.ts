import {Component, OnInit} from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    $.getScript('../../../assets/js/material-dashboard.js');
    $.getScript('../../../assets/js/initMenu.js');
  }

  isMaps(path: any) {
    var titlee: undefined | string = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    titlee = titlee.split('/').pop();
    if (path == titlee) {
      return false;
    } else {
      return true;
    }
  }

}
