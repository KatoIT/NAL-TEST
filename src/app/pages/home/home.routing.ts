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
import {UserListComponent} from "./user-list/user-list.component";
import {AuthGuard} from "../../guards/auth.guard";
import {CreateUserComponent} from "./user/create-user/create-user.component";
import {CreateTeamComponent} from "./team/create-team/create-team.component";
import {EditTeamComponent} from "./team/edit-team/edit-team.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
      {path: 'user/:id', component: EditUserComponent, canActivate: [AuthGuard]},
      {path: 'user', component: CreateUserComponent, canActivate: [AuthGuard]},
      {path: 'team/:id', component: EditTeamComponent, canActivate: [AuthGuard]},
      {path: 'team', component: CreateTeamComponent, canActivate: [AuthGuard]},
      {path: 'teams', component: TeamListComponent, canActivate: [AuthGuard]},
      {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
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

