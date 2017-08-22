import { NgModule, Optional, SkipSelf } from '@angular/core';
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
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('核心模块只能加载一次');
    }
  }

}
