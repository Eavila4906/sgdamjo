import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: '', component: PageComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]
  },

  { path: '', component: PageComponent,
    children: [
      { path: 'eventos', component: EventsComponent }
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
export class PageRoutingModule { }
