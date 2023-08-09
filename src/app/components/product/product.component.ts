import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  
  constructor() {
    this.product = {
      "id": 0,
      "name": "",
      "price": 0,
      "url": "",
      "description": ""
    };
   }

}
