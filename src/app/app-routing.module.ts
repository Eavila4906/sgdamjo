import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageRoutingModule } from './page/page-routing.module';
import { CpanelRoutingModule } from './cpanel/cpanel-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule,
    CpanelRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
