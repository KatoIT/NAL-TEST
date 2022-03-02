import {Component, OnInit} from '@angular/core';
import {ROUTES} from '../sidebar/sidebar-routes.config';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private listTitles: any[] = [];
  location: Location;

  constructor(location: Location,
              private route: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    let title: string | undefined = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === '#') {
      title = title.slice(2);
    }
    title = title.split('/').pop();

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === title) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logOut() {
    this.route.navigate(['login']).then(r => ['abc']);
  }
}
