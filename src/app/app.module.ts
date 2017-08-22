import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
