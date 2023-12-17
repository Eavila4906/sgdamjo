import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedpageModule } from '../sharedpage/sharedpage.module';

import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { EventsComponent } from './events/events.component';
import { DynamiceventComponent } from './dynamicevent/dynamicevent.component';



@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    EventsComponent,
    DynamiceventComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedpageModule
  ],
  exports: [
    HomeComponent,
    EventsComponent,
    DynamiceventComponent
  ]
})
export class PageModule { }
