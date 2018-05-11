import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product, ProductFilter} from '../../../classes/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  @Input() public items: Product[] = [];

  public readonly filters: ProductFilter[] = [
    <ProductFilter>{classify: 'food'},
    <ProductFilter>{classify: 'beverage'},
    <ProductFilter>{classify: 'vegetable'},
  ];

  public activeFilters: ProductFilter[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public itemsAfterFilter(): Product[] {
    console.log(this.items);
    return this.items.filter((item: Product) => {
      const matchesActiveFilter: boolean = this.activeFilters.reduce((prev, curr) => {
        if (item.classifys.includes(curr.classify)) {
          return prev && true;
        } else {
          return false;
        }
      }, true);

      return matchesActiveFilter;
    });
  }

  public updateActivatedFilters(filters: ProductFilter[]) {
    this.activeFilters = filters;
  }

     
}
