import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdToolbarModule, MdMenuModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule
  ]
})
export class ShareModule { }
