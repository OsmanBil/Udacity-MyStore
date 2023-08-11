import { Injectable } from '@angular/core';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() { }

  addToCart(product: Product, quantity: number): void {
    const cartItem = this.cart.find(item => item.product.id === product.id);
  
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      this.cart.push({ product: product, quantity: quantity });
    }
  
    console.log('Produkt wurde in den Warenkorb gelegt');
    console.log(this.cart);
  }
  

  getCart(): CartItem[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }

  removeFromCart(product: Product): void {
    const index = this.cart.findIndex(item => item.product.id === product.id);
    
    if (index > -1) {
      this.cart.splice(index, 1);
      console.log('Produkt wurde aus dem Warenkorb entfernt');
    }
  }
  

}
