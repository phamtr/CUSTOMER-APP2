import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public currency: string;
  @Input() public size: number;

  public getCurrency(): string {
    return 'VNĐ';
  }

  constructor() { }

  ngOnInit() {
  }

}
