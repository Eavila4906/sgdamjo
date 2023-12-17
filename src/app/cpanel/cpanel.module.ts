import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedcpanelModule } from '../sharedcpanel/sharedcpanel.module';

import { CpanelComponent } from './cpanel.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    CpanelComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedcpanelModule
  ]
})
export class CpanelModule { }
