import { NgModule } from '@angular/core';
/**
 * 自定义
 */
import { ShareModule } from '../share/share.module';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [FirstPageComponent],
  exports: [FirstPageComponent]
})
export class CoreModule { }
