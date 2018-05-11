import {Component, OnInit} from '@angular/core';
import {Product} from '../classes/product';
import {ProductsService} from '../services/products.service';
import {CartService} from '../services/cart.service';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService, CartService]
})
export class ProductsComponent implements OnInit {

  public items: Product[] = [];

  constructor(private productsServices: ProductsService
    , private cartService: CartService) {
    productsServices.getProducts()
      .subscribe(_ => this.items = _);

    this.cartService
      .getItems()
      .subscribe((items: Product[]) => {
      // remove items that are in our cart
        const allItems = this.items;
        this.items = allItems.filter(_ => {
          return !this.itemIsInCart(_, items);
        });
      });
  }

  ngOnInit() {
  }

  private itemIsInCart(item: Product, cart: Product[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
}
