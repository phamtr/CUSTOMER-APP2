import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { ClassifyproductComponent } from './component/classifyproduct/classifyproduct.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductFilterComponent } from './component/product-filter/product-filter.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, ProductsComponent, ClassifyproductComponent, ProductComponent, ProductDetailsComponent, ProductFilterComponent, ShoppingCartComponent]
})
export class ProductsModule { }
