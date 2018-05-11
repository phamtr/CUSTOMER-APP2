import {Injectable} from '@angular/core';
import {Product} from '../classes/product';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ProductsService {
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

  public getProduct(id: number): Observable<Product> {
    return this
      .products()
      .map(_ => _[id]);
  }

  private products(): Observable<Product[]> {
    return of(<Product[]>[
      <Product>{id: 1, name: 'Blue item', price: 123.09, classifys: ['food']},
      <Product>{id: 2, name: 'Green and gray', price: 99.09, classifys: ['vegetable']},
      <Product>{id: 3, name: 'Green item', price: 99.09, classifys: ['vegetable']},
      <Product>{id: 4, name: 'Blue and gray', price: 99.09, classifys: ['food']},
      <Product>{id: 5, name: 'Green and blue', price: 99.09, classifys: ['beverage']},
      <Product>{id: 6, name: 'Green and blue', price: 99.09, classifys: ['vegetable']},
      <Product>{id: 7, name: 'Gray', price: 99.09, classifys: ['food']},
      <Product>{id: 8, name: 'Blue', price: 99.09, classifys: ['beverage']},
      <Product>{id: 9, name: 'All classifys', price: 99.09, classifys: ['food']},
    ]);
  }
}
