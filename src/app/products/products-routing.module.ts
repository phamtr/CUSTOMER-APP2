import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: 'load-me',
    component: ProductListComponent
  },
  {
    path: '',
    component: ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
