import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TeamListComponent} from './team-list/team-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {AuthGuard} from "../../guards/auth.guard";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
      {path: 'employee', component: CreateEmployeeComponent, canActivate: [AuthGuard]},
      {path: 'teams', component: TeamListComponent, canActivate: [AuthGuard]},
      {path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard]},
      {path: 'typography', component: TypographyComponent, canActivate: [AuthGuard]},
      {path: 'icons', component: IconsComponent, canActivate: [AuthGuard]},
      {path: 'maps', component: MapsComponent, canActivate: [AuthGuard]},
      {path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard]},
      {path: 'upgrade', component: UpgradeComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule {
}

