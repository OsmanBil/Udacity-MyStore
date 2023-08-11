import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderData: {
    totalAmount: string,
    fullName: string,
    address: string,
    creditCardNum: string
  } | null = null;

  constructor() { }

  setOrderData(data: any): void {
    this.orderData = data;
  }

  getOrderData() {
    return this.orderData;
  }
}