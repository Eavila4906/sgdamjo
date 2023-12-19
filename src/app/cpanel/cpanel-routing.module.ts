import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CpanelComponent } from './cpanel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { WebsiteComponent } from './website/website.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'cpanel', component: CpanelComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'eventos', component: EventsComponent },
      { path: 'sitio_web', component: WebsiteComponent },
      { path: 'usuarios', component: UsersComponent }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ], 
  exports: [
    RouterModule
  ]
})
export class CpanelRoutingModule { }
