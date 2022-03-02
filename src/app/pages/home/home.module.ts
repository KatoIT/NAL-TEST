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
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {ReactiveFormsModule} from "@angular/forms";

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
    EmployeeListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CreateEmployeeComponent
  ]
})
export class HomeModule {
}
