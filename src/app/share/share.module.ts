import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule
  ]
})
export class ShareModule { }
