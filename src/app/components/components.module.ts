import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    HomeComponent,
    TopComponent,
    LoginComponent,
  ],
  exports: [
    HomeComponent,
    TopComponent,
    LoginComponent
  ],
})
export class ComponentsModule { }
