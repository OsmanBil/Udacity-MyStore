import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product;
  selectedQuantity: number = 1;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.product = {
      "id": 0,
      "name": "",
      "price": 0,
      "url": "",
      "description": "",
      "quantity": 1
    };
  }
  ngOnInit(): void {
    this.loadData();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(this.product, +this.selectedQuantity);
  }

  async loadData() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    try {
      const response = await fetch('./assets/data.json');
      if (!response.ok) {
        throw new Error('Netzwerkantwort war nicht ok');
      }
      const products = await response.json();
      this.product = products.find((product: Product) => product.id === id);
    } catch (error) {
      console.error('Es gab ein Problem:', error);
    }
  }

}
