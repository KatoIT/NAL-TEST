import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../../components/components.module';
import {HomeRoutingModule} from './home.routing';

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
import {CreateUserComponent} from "./user/create-user/create-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateTeamComponent} from './team/create-team/create-team.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {EditTeamComponent} from './team/edit-team/edit-team.component';
import {DeleteUserModalComponent} from './user/delete-user-modal/delete-user-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    HomeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    UserProfileComponent,
    TeamListComponent,
    UserListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CreateUserComponent,
    CreateTeamComponent,
    EditUserComponent,
    EditTeamComponent,
    DeleteUserModalComponent
  ]
})
export class HomeModule {
}
