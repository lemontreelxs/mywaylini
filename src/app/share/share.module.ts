import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdToolbarModule, MdMenuModule, MdIconModule, MdSidenavModule, MdCardModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdSidenavModule,
    MdCardModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdSidenavModule,
    MdCardModule,
    NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class ShareModule { }
