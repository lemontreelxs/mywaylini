import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * 自定义
 */
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstPageComponent],
  exports: [FirstPageComponent]
})
export class CoreModule { }
