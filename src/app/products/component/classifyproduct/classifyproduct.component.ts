import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ClassifyProduct } from '../../../classes/product';

@Component({
  selector: 'app-classifyproduct',
  templateUrl: './classifyproduct.component.html',
  styleUrls: ['./classifyproduct.component.css']
})
export class ClassifyproductComponent implements OnInit {

  @Input() classifys: ClassifyProduct[] = [];
  classSelected: Number;

  constructor() { }

  ngOnInit() {
    this.classSelected = 1;
  }

}
