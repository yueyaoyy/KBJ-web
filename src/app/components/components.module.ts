import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    HomeComponent,
    TopComponent,
  ],
  exports: [
    HomeComponent,
    TopComponent,
  ],
})
export class ComponentsModule { }
