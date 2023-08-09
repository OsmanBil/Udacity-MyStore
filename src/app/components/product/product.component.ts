import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  selectedQuantity: number = 1; // Anfangs standardmäßig auf 1 setzen

  constructor(private cartService: CartService) {
    
    this.product = {
      "id": 0,
      "name": "",
      "price": 0,
      "url": "",
      "description": "",
      "quantity": 1
    };
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(this.product, +this.selectedQuantity);
}


}
