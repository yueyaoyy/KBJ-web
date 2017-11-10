import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from './../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { TopComponent } from './top/top.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ClassifiedProductComponent } from './classified-product/classified-product.component';
import { LoginComponent } from './login/login.component';

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
    FooterComponent,
    ProductDetailComponent,
    ClassifiedProductComponent,
    LoginComponent
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    HomeProductComponent,
    TopComponent,
    ButtomComponent,
    FooterComponent,
    LoginComponent
  ],
})
export class ComponentsModule { }
