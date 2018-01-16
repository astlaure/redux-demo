import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', reducers),
  ],
  declarations: [ProductsListComponent]
})
export class ProductsModule { }
