import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from './../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { TopComponent } from './top/top.component';

import { ButtomComponent } from './buttom/buttom.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    MaterialModule,
  ],
  declarations: [
    FooterComponent,
    HomeComponent,
    HomeProductComponent,
    TopComponent,
    ButtomComponent,
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    HomeProductComponent,
    TopComponent,
    ButtomComponent,
  ],
})
export class ComponentsModule { }
