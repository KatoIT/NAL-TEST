import {Component, OnInit} from '@angular/core';
import {ROUTES} from './sidebar-routes.config';
import {AuthService} from "../../services/auth.service";

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  role: string = '';

  constructor(private authService: AuthService) {
    this.role = authService.roles
  }

  ngOnInit() {
    $.getScript('../../assets/js/sidebar-moving-tab.js');
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItems = ROUTES;
  }

}
