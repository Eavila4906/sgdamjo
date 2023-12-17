import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedpageModule } from './sharedpage/sharedpage.module';
import { PageModule } from './page/page.module';
import { CpanelModule } from './cpanel/cpanel.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedpageModule,
    PageModule,
    CpanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
