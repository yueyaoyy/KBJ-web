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
import { SearchProductComponent } from './search-product/search-product.component';
import { SearchOptionComponent } from './search-option/search-option.component';


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
    FooterComponent,
    ProductDetailComponent,
    ClassifiedProductComponent,
    LoginComponent,
    SearchProductComponent,
    SearchOptionComponent,
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    HomeProductComponent,
    TopComponent,
    FooterComponent,
    LoginComponent,
    SearchOptionComponent,
  ],
})
export class ComponentsModule { }
