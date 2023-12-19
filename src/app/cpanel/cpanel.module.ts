import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedcpanelModule } from '../sharedcpanel/sharedcpanel.module';

import { CpanelComponent } from './cpanel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { WebsiteComponent } from './website/website.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    CpanelComponent,
    DashboardComponent,
    EventsComponent,
    WebsiteComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedcpanelModule
  ]
})
export class CpanelModule { }
