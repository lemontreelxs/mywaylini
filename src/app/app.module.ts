import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * 自定义模块
 */
import { AppRouterModule } from './app-router.module';
import { CoreModule } from './core/core.module';
/**
 * 根组件
 */
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRouterModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
