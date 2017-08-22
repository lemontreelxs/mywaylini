import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * 自定义模块
 */
import { AppRouterModule } from './app-router.module';
import { CoreModule } from './core/core.module';
/**
 * 自定义组件
 */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
