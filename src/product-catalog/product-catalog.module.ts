import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {CoreModule } from '../core/core.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

@NgModule({
  imports: [
    CommonModule,    ReactiveFormsModule,
  ],
  declarations: [ProductListingComponent, ProductUpdateComponent]
})
export class ProductCatalogModule { }