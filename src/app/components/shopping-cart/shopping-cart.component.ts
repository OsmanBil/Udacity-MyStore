import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  title: string = 'Shopping Cart';
  body: string = 'box';
  fullName: string = 'fullName';
  address: string = 'adress';
  creditCardNum: string = 'creditCard';


  constructor(private cartService: CartService,private decimalPipe: DecimalPipe, private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  getTotalAmount(): string {
    const total = this.cartItems.reduce((acc, item) => {
      return acc + (item.quantity * item.product.price);
    }, 0);
    return this.decimalPipe.transform(total, '1.2-2')!;
  }
  
  submitForm(): void {
    const orderData = {
      totalAmount: this.getTotalAmount(),
      fullName: this.fullName,
      address: this.address,
      creditCardNum: this.creditCardNum
    };

    this.orderService.setOrderData(orderData);
    
    this.router.navigate(['/order-confirmation']);

    this.cartService.clearCart();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    // Aktualisieren Sie den Warenkorb, um das entfernte Produkt zu reflektieren
    this.cartItems = this.cartService.getCart();
  }
  
  
}
